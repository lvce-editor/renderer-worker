import { beforeEach, expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/JsonRpc/JsonRpc.js', () => ({
  invoke: jest.fn(),
  invokeAndTransfer: jest.fn(),
}))

const JsonRpc = await import('../src/parts/JsonRpc/JsonRpc.js')
const GetOrCreateWorker = await import('../src/parts/GetOrCreateWorker/GetOrCreateWorker.js')
const invoke = /** @type {any} */ (JsonRpc.invoke)
const invokeAndTransfer = /** @type {any} */ (JsonRpc.invokeAndTransfer)

const createIpc = () => ({
  dispose: jest.fn(),
  send: jest.fn(),
})

beforeEach(() => {
  jest.resetAllMocks()
  invoke.mockResolvedValue(undefined)
  invokeAndTransfer.mockResolvedValue(undefined)
})

test('terminates worker after last reference is released', async () => {
  const ipc = createIpc()
  const launch = jest.fn(async () => ipc)
  const worker = GetOrCreateWorker.getOrCreateWorker(launch, 'Test.terminate')

  worker.acquire()
  worker.acquire()
  await worker.invoke('Test.method')
  await worker.release()

  expect(ipc.send).not.toHaveBeenCalled()
  expect(ipc.dispose).not.toHaveBeenCalled()

  await worker.release()

  expect(ipc.send).toHaveBeenCalledWith({ jsonrpc: '2.0', method: 'Test.terminate', params: [] })
  expect(ipc.dispose).toHaveBeenCalledTimes(1)
})

test('terminates an unreferenced worker after an invocation', async () => {
  const firstIpc = createIpc()
  const secondIpc = createIpc()
  const ipcs = [firstIpc, secondIpc]
  const launch = jest.fn(async () => ipcs.shift())
  const worker = GetOrCreateWorker.getOrCreateWorker(launch, 'Test.terminate')

  await worker.invoke('Test.method')
  await worker.invokeAndTransfer('Test.methodAndTransfer')

  expect(launch).toHaveBeenCalledTimes(2)
  expect(firstIpc.send).toHaveBeenCalledWith({ jsonrpc: '2.0', method: 'Test.terminate', params: [] })
  expect(firstIpc.dispose).toHaveBeenCalledTimes(1)
  expect(secondIpc.send).toHaveBeenCalledWith({ jsonrpc: '2.0', method: 'Test.terminate', params: [] })
  expect(secondIpc.dispose).toHaveBeenCalledTimes(1)
})

test('waits for pending invocations before terminating worker', async () => {
  const ipc = createIpc()
  const launch = jest.fn(async () => ipc)
  const worker = GetOrCreateWorker.getOrCreateWorker(launch, 'Test.terminate')
  /** @type {(value: string) => void} */
  let resolveInvoke = () => {}
  invoke.mockImplementation(
    () =>
      new Promise((resolve) => {
        resolveInvoke = resolve
      }),
  )

  worker.acquire()
  const invokePromise = worker.invoke('Test.method')
  await Promise.resolve()
  await worker.release()

  expect(ipc.send).not.toHaveBeenCalled()
  expect(ipc.dispose).not.toHaveBeenCalled()

  resolveInvoke('done')
  await expect(invokePromise).resolves.toBe('done')

  expect(ipc.send).toHaveBeenCalledWith({ jsonrpc: '2.0', method: 'Test.terminate', params: [] })
  expect(ipc.dispose).toHaveBeenCalledTimes(1)
})

test('ignores release without a matching reference', async () => {
  const ipc = createIpc()
  const launch = jest.fn(async () => ipc)
  const worker = GetOrCreateWorker.getOrCreateWorker(launch, 'Test.terminate')

  await worker.release()
  worker.acquire()
  await worker.invoke('Test.method')

  expect(ipc.send).not.toHaveBeenCalled()
  expect(ipc.dispose).not.toHaveBeenCalled()

  await worker.release()

  expect(ipc.send).toHaveBeenCalledTimes(1)
  expect(ipc.dispose).toHaveBeenCalledTimes(1)
})
