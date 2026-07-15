import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/ExtensionSearchViewWorker/ExtensionSearchViewWorker.js', () => ({
  acquire: jest.fn(),
  invoke: jest.fn(),
  release: jest.fn(),
  restart: jest.fn(),
}))

const ViewletExtensions = await import('../src/parts/ViewletExtensions/ViewletExtensions.js')
const ExtensionSearchViewWorker = await import('../src/parts/ExtensionSearchViewWorker/ExtensionSearchViewWorker.js')

test('create stores the parent uid', () => {
  const state = ViewletExtensions.create(1, '', 0, 0, 100, 100, [], 42)
  expect(state.parentUid).toBe(42)
  expect(ExtensionSearchViewWorker.acquire).toHaveBeenCalledTimes(1)
})

test('dispose releases worker reference', async () => {
  await ViewletExtensions.dispose()

  expect(ExtensionSearchViewWorker.release).toHaveBeenCalledTimes(1)
})
