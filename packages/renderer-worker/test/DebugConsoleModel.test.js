import { beforeEach, expect, jest, test } from '@jest/globals'

const evaluate = jest.fn()
const getState = jest.fn()

jest.unstable_mockModule('../src/parts/Debug/Debug.js', () => ({
  evaluate,
}))

jest.unstable_mockModule('../src/parts/ViewletStates/ViewletStates.js', () => ({
  getState,
}))

const DebugConsoleModel = await import('../src/parts/DebugConsoleModel/DebugConsoleModel.js')

beforeEach(() => {
  jest.resetAllMocks()
})

test('evaluate explains when there is no active debug session', async () => {
  getState.mockReturnValue(undefined)

  await expect(DebugConsoleModel.evaluate('1 + 1')).resolves.toBe('No active debug session. Start debugging to evaluate expressions.')
  expect(evaluate).not.toHaveBeenCalled()
})

test('evaluate forwards the expression to an active debug session', async () => {
  getState.mockReturnValue({
    callFrameId: 'call-frame-1',
    debugId: 'debug-1',
  })
  // @ts-ignore
  evaluate.mockResolvedValue({
    description: '2',
  })

  await expect(DebugConsoleModel.evaluate('1 + 1')).resolves.toBe('2')
  expect(evaluate).toHaveBeenCalledWith('debug-1', '1 + 1', 'call-frame-1')
})
