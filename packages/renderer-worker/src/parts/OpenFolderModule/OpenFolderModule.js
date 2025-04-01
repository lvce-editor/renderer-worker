import * as OpenFolderElectron from '../OpenFolderElectron/OpenFolderElectron.js'
import * as OpenFolderRemote from '../OpenFolderRemote/OpenFolderRemote.js'
import * as OpenFolderWeb from '../OpenFolderWeb/OpenFolderWeb.js'
import * as Platform from '../Platform/Platform.js'
import * as PlatformType from '../PlatformType/PlatformType.js'

export const load = () => {
  switch (Platform.platform) {
    case PlatformType.Web:
      return OpenFolderWeb
    case PlatformType.Remote:
      return OpenFolderRemote
    case PlatformType.Electron:
      return OpenFolderElectron
    default:
      throw new Error('unsupported platform')
  }
}
