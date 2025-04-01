import * as MenuEntryId from '../MenuEntryId/MenuEntryId.js'
import * as Platform from '../Platform/Platform.js'
import * as PlatformType from '../PlatformType/PlatformType.js'
import * as MenuEntriesTitleBarRemote from './MenuEntriesTitleBarRemote.js'
import * as MenuEntriesTitleBarWeb from './MenuEntriesTitleBarWeb.js'

const getModule = () => {
  switch (Platform.platform) {
    case PlatformType.Web:
      return MenuEntriesTitleBarWeb
    default:
      return MenuEntriesTitleBarRemote
  }
}

export const id = MenuEntryId.TitleBar
export const load = () => {
  return getModule()
}
