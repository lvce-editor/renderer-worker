import { expect, jest, test } from '@jest/globals'
import * as MenuItemFlags from '../src/parts/MenuItemFlags/MenuItemFlags.js'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.js'

jest.unstable_mockModule('../src/parts/Platform/Platform.js', () => {
  return {
    platform: PlatformType.Electron,
  }
})

const MenuEntriesFile = await import('../src/parts/MenuEntriesFile/MenuEntriesFile.js')

test('getMenuEntries - electron', () => {
  const menuEntries = MenuEntriesFile.getMenuEntries()
  const closeWindowIndex = menuEntries.findIndex((entry) => entry.id === 'closeWindow')
  const exitIndex = menuEntries.findIndex((entry) => entry.id === 'exit')

  expect(menuEntries[closeWindowIndex]).toEqual({
    command: 'Chrome.close',
    flags: MenuItemFlags.Ignore,
    id: 'closeWindow',
    label: 'Close Window',
  })
  expect(closeWindowIndex).toBe(exitIndex - 1)
})
