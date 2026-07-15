import { expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/EditorWorker/EditorWorker.ts', () => ({
  invoke: jest.fn(),
}))

const EditorWorker = await import('../src/parts/EditorWorker/EditorWorker.ts')
const ViewletEditorTextCommands = await import('../src/parts/ViewletEditorText/ViewletEditorTextCommands.js')

test('closeColorPicker', async () => {
  const editor = { uid: 42 }
  await ViewletEditorTextCommands.Commands.closeColorPicker(editor)
  // @ts-ignore Editor worker types are updated after the editor worker release.
  expect(EditorWorker.invoke).toHaveBeenCalledWith('Editor.closeColorPicker', 42)
})
