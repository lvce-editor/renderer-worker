import * as JsonRpc from '../JsonRpc/JsonRpc.js'

const workers = new Map()

const getOrCreate = (fn) => {
  if (!workers.has(fn)) {
    workers.set(fn, fn())
  }
  return workers.get(fn)
}

const terminate = async (fn, terminateCommand) => {
  const promise = workers.get(fn)
  if (!promise) {
    return
  }
  workers.delete(fn)
  const ipc = await promise
  ipc.send({ jsonrpc: '2.0', method: terminateCommand, params: [] })
  ipc.dispose()
}

export const getOrCreateWorker = (fn, terminateCommand) => {
  let referenceCount = 0
  let pendingInvocationCount = 0

  const terminateIfIdle = async () => {
    if (!terminateCommand || referenceCount > 0 || pendingInvocationCount > 0) {
      return
    }
    await terminate(fn, terminateCommand)
  }

  const invokeWithTracking = async (invokeFn, method, params) => {
    pendingInvocationCount++
    try {
      const ipc = await getOrCreate(fn)
      return await invokeFn(ipc, method, ...params)
    } finally {
      pendingInvocationCount--
      await terminateIfIdle()
    }
  }

  return {
    acquire() {
      referenceCount++
    },
    async invoke(method, ...params) {
      return invokeWithTracking(JsonRpc.invoke, method, params)
    },
    async invokeAndTransfer(method, ...params) {
      return invokeWithTracking(JsonRpc.invokeAndTransfer, method, params)
    },
    async release() {
      if (referenceCount === 0) {
        return
      }
      referenceCount--
      await terminateIfIdle()
    },
    async dispose() {
      const promise = workers.get(fn)
      if (!promise) {
        return
      }
      workers.delete(fn)
      const ipc = await promise
      ipc.dispose()
    },
    async restart(restartTerminateCommand) {
      await terminate(fn, restartTerminateCommand)
      await getOrCreate(fn)
    },
  }
}
