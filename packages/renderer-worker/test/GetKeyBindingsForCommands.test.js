import { expect, test } from '@jest/globals'
import * as KeyCode from '../src/parts/KeyCode/KeyCode.js'
import * as KeyModifier from '../src/parts/KeyModifier/KeyModifier.js'
import * as GetKeyBindingsForCommands from '../src/parts/GetKeyBindingsForCommands/GetKeyBindingsForCommands.js'

test('getKeyBindingsForCommands - empty', () => {
  expect(GetKeyBindingsForCommands.getKeyBindingsForCommands({}, [])).toEqual([])
})

test('getKeyBindingsForCommands - returns keys in entry order', () => {
  const entries = [
    {
      command: 'Main.newFile',
    },
    {
      command: 'Editor.cut',
    },
    {
      command: 'missing',
    },
  ]

  expect(GetKeyBindingsForCommands.getKeyBindingsForCommands({}, entries)).toEqual([
    KeyModifier.CtrlCmd | KeyCode.KeyN,
    KeyModifier.CtrlCmd | KeyCode.KeyX,
    0,
  ])
})

test('getKeyBindingsForCommands - matches args', () => {
  const entries = [
    {
      args: ['Terminal'],
      command: 'Layout.togglePanel',
    },
    {
      command: 'Layout.togglePanel',
    },
  ]

  expect(GetKeyBindingsForCommands.getKeyBindingsForCommands({}, entries)).toEqual([
    KeyModifier.CtrlCmd | KeyCode.Backquote,
    KeyModifier.CtrlCmd | KeyCode.KeyJ,
  ])
})

test('getKeyBindingsForCommands is a return value command', () => {
  expect(GetKeyBindingsForCommands.getKeyBindingsForCommands.returnValue).toBe(true)
})
