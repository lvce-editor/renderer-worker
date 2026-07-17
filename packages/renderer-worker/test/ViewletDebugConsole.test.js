import { expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/DebugConsoleModel/DebugConsoleModel.js', () => ({
  evaluate: jest.fn(() => 'No active debug session. Start debugging to evaluate expressions.'),
}))

const ViewletDebugConsole = await import('../src/parts/ViewletDebugConsole/ViewletDebugConsole.js')

test('create', () => {
  const state = ViewletDebugConsole.create()
  expect(state).toBeDefined()
})

test('loadContent', async () => {
  const state = ViewletDebugConsole.create()
  expect(await ViewletDebugConsole.loadContent(state)).toMatchObject({})
})

test('evaluate shows feedback and clears the input', async () => {
  const state = {
    ...ViewletDebugConsole.create(),
    inputValue: '1 + 1',
    text: '',
  }
  expect(await ViewletDebugConsole.evaluate(state)).toMatchObject({
    inputValue: '',
    text: '\nNo active debug session. Start debugging to evaluate expressions.',
  })
})
