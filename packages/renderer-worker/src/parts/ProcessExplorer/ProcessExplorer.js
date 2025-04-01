import * as Platform from '../Platform/Platform.js'
import * as PlatformType from '../PlatformType/PlatformType.js'
import * as ProcessExplorerElectron from './ProcessExplorerElectron.js'
import * as ProcessExplorerRemote from './ProcessExplorerRemote.js'
import * as ProcessExplorerWeb from './ProcessExplorerWeb.js'

const getModule = () => {
  switch (Platform.platform) {
    case PlatformType.Electron:
      return ProcessExplorerElectron
    case PlatformType.Remote:
      return ProcessExplorerRemote
    case PlatformType.Web:
      return ProcessExplorerWeb
    default:
      throw new Error('unsupported platform')
  }
}

export const open = async () => {
  const module = getModule()
  return module.open()
}
