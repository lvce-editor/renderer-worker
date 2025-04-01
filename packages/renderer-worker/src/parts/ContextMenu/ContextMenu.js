import * as Platform from '../Platform/Platform.js'
import * as PlatformType from '../PlatformType/PlatformType.js'
import * as ContextMenuElectron from './ContextMenuElectron.js'
import * as ContextMenuBrowser from './ContextMenuBrowser.js'
import * as HasContextMenuNativePreference from '../HasContextMenuNativePreference/HasContextMenuNativePreference.js'

const getModule = () => {
  if (Platform.platform === PlatformType.Electron && HasContextMenuNativePreference.hasContextMenuNativePreference()) {
    return ContextMenuElectron
  }
  return ContextMenuBrowser
}

export const show = async (x, y, id, ...args) => {
  const module = getModule()
  return module.show(x, y, id, ...args)
}
