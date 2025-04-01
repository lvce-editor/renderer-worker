import * as PathSeparatorType from '../PathSeparatorType/PathSeparatorType.js'
import * as FileSystemAppStartupPerformance from './FileSystemAppStartupPerformance.js'
import * as FileSystemAppMemoryUsage from './FileSystemAppMemoryUsage.js'
import * as FileSystemAppSettings from './FileSystemAppSettings.js'
import * as FileSystemAppRecentlyOpened from './FileSystemAppRecentlyOpened.js'
import * as FileSystemAppSession from './FileSystemAppSession.js'
import * as FileSystemAppKeyBindings from './FileSystemAppKeyBindings.js'

export const name = 'App'

const getModule = (uri) => {
  switch (uri) {
    case 'startup-performance':
      return FileSystemAppStartupPerformance
    case 'memory-usage':
      return FileSystemAppMemoryUsage
    case 'settings.json':
      return FileSystemAppSettings
    case 'recently-opened.json':
      return FileSystemAppRecentlyOpened
    case 'session.json':
      return FileSystemAppSession
    case 'keybindings.json':
      return FileSystemAppKeyBindings
    default:
      throw new Error(`unsupported file: ${uri}`)
  }
}

export const readFile = async (uri) => {
  const module = await getModule(uri)
  return module.readFile()
}

export const writeFile = async (uri, content) => {
  const module = await getModule(uri)
  return module.writeFile(content)
}

export const readDirWithFileTypes = () => {
  return []
}

export const rename = async (oldUri, newUri) => {
  throw new Error('not allowed')
}

export const remove = async (path) => {
  throw new Error('not allowed')
}

export const mkdir = async (path) => {
  throw new Error('not allowed')
}

export const getPathSeparator = () => {
  return PathSeparatorType.Slash
}

export const canBeRestored = true
