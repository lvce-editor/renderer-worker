import { expect, test } from '@jest/globals'
import { CommandNotFoundError } from '../src/parts/CommandNotFoundError/CommandNotFoundError.js'
import * as ModuleId from '../src/parts/ModuleId/ModuleId.js'
import * as ModuleMap from '../src/parts/ModuleMap/ModuleMap.js'

test('getModule - not found', () => {
  const getModuleId = () => ModuleMap.getModuleId('Layout.getModuleId')
  expect(getModuleId).toThrow(CommandNotFoundError)
  expect(getModuleId).toThrow(new Error('command Layout.getModuleId not found'))
})

test('getModule', () => {
  expect(ModuleMap.getModuleId('About.showAbout')).toBe(ModuleId.About)
})
