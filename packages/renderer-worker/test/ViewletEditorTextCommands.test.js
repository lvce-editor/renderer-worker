import { beforeEach, expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/EditorWorker/EditorWorker.ts', () => ({
  invoke: jest.fn(),
}))

const EditorWorker = await import('../src/parts/EditorWorker/EditorWorker.ts')
const ViewletEditorTextCommands = await import('../src/parts/ViewletEditorText/ViewletEditorTextCommands.js')

beforeEach(() => {
  jest.clearAllMocks()
})

test('closeColorPicker', async () => {
  const editor = { uid: 42 }
  await ViewletEditorTextCommands.Commands.closeColorPicker(editor)
  // @ts-ignore Editor worker types are updated after the editor worker release.
  expect(EditorWorker.invoke).toHaveBeenCalledWith('Editor.closeColorPicker', 42)
})

test('setLanguageId renders the updated syntax highlighting', async () => {
  const editor = { id: 42, uid: 42 }
  const newState = { id: 42, languageId: 'xyz', uid: 42 }
  const commands = [['setText', []]]
  // @ts-ignore
  EditorWorker.invoke.mockResolvedValueOnce(newState).mockResolvedValueOnce(commands)

  const result = await ViewletEditorTextCommands.Commands.setLanguageId(editor, 'xyz', '/extensions/test/tokenizeXyz.js')

  // @ts-ignore Editor worker types are updated after the editor worker release.
  expect(EditorWorker.invoke).toHaveBeenNthCalledWith(1, 'Editor.setLanguageId', 42, 'xyz', '/extensions/test/tokenizeXyz.js')
  expect(EditorWorker.invoke).toHaveBeenNthCalledWith(2, 'Editor.render', 42)
  expect(result).toEqual({
    ...newState,
    commands,
  })
})
