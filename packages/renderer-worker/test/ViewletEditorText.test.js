import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/MeasureTextWidth/MeasureTextWidth.js', () => {
  return {
    measureTextWidth(text) {
      return text.length * 10
    },
  }
})

jest.unstable_mockModule('../src/parts/EditorWorker/EditorWorker.ts', () => ({
  invoke: jest.fn(),
}))

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.js', () => ({
  invoke: jest.fn(),
}))

jest.unstable_mockModule('../src/parts/Tokenizer/Tokenizer.js', () => ({
  getTokenizer: jest.fn(),
  removeConnectedEditor: jest.fn(),
}))

const EditorWorker = await import('../src/parts/EditorWorker/EditorWorker.ts')
const RendererProcess = await import('../src/parts/RendererProcess/RendererProcess.js')
const Tokenizer = await import('../src/parts/Tokenizer/Tokenizer.js')
const ViewletEditorText = await import('../src/parts/ViewletEditorText/ViewletEditorText.js')

test('dispose', async () => {
  const commands = [['Viewlet.dispose', 2]]
  // @ts-ignore
  EditorWorker.invoke.mockResolvedValue(commands)

  await ViewletEditorText.dispose({ id: 1 })

  expect(Tokenizer.removeConnectedEditor).toHaveBeenCalledWith(1)
  // @ts-ignore
  expect(EditorWorker.invoke).toHaveBeenCalledWith('Editor.dispose', 1)
  expect(RendererProcess.invoke).toHaveBeenCalledWith('Viewlet.sendMultiple', commands)
})

test('resize - increase height', () => {
  const state = {
    ...ViewletEditorText.create(0, '', 0, 0, 20, 20),
    lines: ['line 1', 'line 2', 'line 3', 'line 4', 'line 5'],
    minLineY: 0,
    maxLineY: 1,
    numberOfVisibleLines: 1,
    focused: true,
    width: 800,
    differences: [0, 0, 0, 0],
  }
  const newState = ViewletEditorText.resize(state, {
    x: 200,
    y: 200,
    width: 200,
    height: 60,
  })
  expect(newState).toEqual(
    expect.objectContaining({
      minLineY: 0,
      maxLineY: 3,
      numberOfVisibleLines: 3,
      scrollBarHeight: 0,
      finalDeltaY: 40,
    }),
  )
})

test('resize - same height', () => {
  const state = {
    ...ViewletEditorText.create(0, '', 0, 0, 20, 20),
    lines: ['line 1', 'line 2', 'line 3', 'line 4', 'line 5'],
    minLineY: 0,
    maxLineY: 3,
    numberOfVisibleLines: 3,
    focused: true,
    width: 800,
    differences: [0, 0, 0, 0],
  }
  const newState = ViewletEditorText.resize(state, {
    x: 200,
    y: 200,
    width: 200,
    height: 60,
  })
  expect(newState).toEqual(
    expect.objectContaining({
      minLineY: 0,
      maxLineY: 3,
      numberOfVisibleLines: 3,
      scrollBarHeight: 0,
      finalDeltaY: 40,
    }),
  )
})

test('resize - reduce height', () => {
  const state = {
    ...ViewletEditorText.create(0, '', 0, 0, 20, 20),
    lines: ['line 1', 'line 2', 'line 3', 'line 4', 'line 5'],
    minLineY: 0,
    maxLineY: 3,
    numberOfVisibleLines: 3,
    height: 60,
    focused: true,
    width: 800,
    differences: [0, 0, 0, 0],
  }
  const newState = ViewletEditorText.resize(state, {
    x: 200,
    y: 200,
    width: 200,
    height: 20,
  })
  expect(newState).toEqual(
    expect.objectContaining({
      minLineY: 0,
      maxLineY: 1,
      numberOfVisibleLines: 1,
      scrollBarHeight: 0,
      finalDeltaY: 80,
    }),
  )
})
