import { expect, test } from '@jest/globals'
import * as KeyCode from '../src/parts/KeyCode/KeyCode.js'
import * as KeyModifier from '../src/parts/KeyModifier/KeyModifier.js'
import * as ViewletLayoutKeyBindings from '../src/parts/ViewletLayout/ViewletLayoutKeyBindings.js'

const getKey = (command, args) => {
  const keyBinding = ViewletLayoutKeyBindings.getKeyBindings().find((item) => {
    return item.command === command && JSON.stringify(item.args) === JSON.stringify(args)
  })
  return keyBinding?.key
}

test('getKeyBindings - includes title bar menu commands', () => {
  expect(getKey('Main.newFile')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyN)
  expect(getKey('Window.openNew')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyN)
  expect(getKey('Dialog.openFile')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyO)
  expect(getKey('Main.save')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyS)
  expect(getKey('Editor.undo')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyZ)
  expect(getKey('Editor.redo')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyY)
  expect(getKey('Editor.cut')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyX)
  expect(getKey('Editor.copy')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyC)
  expect(getKey('Editor.paste')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyV)
  expect(getKey('Editor.selectAll')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyA)
  expect(getKey('Command.openCommandPalette')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyP)
  expect(getKey('Explorer.focus')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyE)
  expect(getKey('Search.focus')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyF)
  expect(getKey('SourceControl.focus')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyG)
  expect(getKey('Run.focus')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyD)
  expect(getKey('Extensions.focus')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyX)
  expect(getKey('Problems.toggle')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyM)
  expect(getKey('Output.toggle')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyU)
  expect(getKey('Layout.togglePanel')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyJ)
  expect(getKey('Layout.togglePanel', ['Terminal'])).toBe(KeyModifier.CtrlCmd | KeyCode.Backquote)
  expect(getKey('Layout.toggleSecondarySideBar')).toBe(KeyModifier.CtrlCmd | KeyModifier.Alt | KeyCode.KeyB)
  expect(getKey('Window.toggleFullScreen')).toBe(KeyCode.F11)
  expect(getKey('Window.zoomReset')).toBe(KeyModifier.CtrlCmd | KeyCode.Numpad0)
  expect(getKey('MainArea.splitRight')).toBe(KeyModifier.CtrlCmd | KeyCode.Backslash)
  expect(getKey('MainArea.flipEditorLayout')).toBe(KeyModifier.Alt | KeyModifier.Shift | KeyCode.Digit8)
  expect(getKey('QuickPick.showFile')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyP)
  expect(getKey('QuickPick.show', ['workspace-symbol'])).toBe(KeyModifier.CtrlCmd | KeyCode.KeyT)
  expect(getKey('QuickPick.showCommands')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyP)
  expect(getKey('Developer.toggleDeveloperTools')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyI)
  expect(getKey('QuickPick.showRecent')).toBe(KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyR)
  expect(getKey('Layout.toggleSideBar')).toBe(KeyModifier.CtrlCmd | KeyCode.KeyB)
  expect(getKey('Window.zoomIn')).toBe(KeyModifier.CtrlCmd | KeyCode.Equal)
  expect(getKey('Window.zoomOut')).toBe(KeyModifier.CtrlCmd | KeyCode.Minus)
})
