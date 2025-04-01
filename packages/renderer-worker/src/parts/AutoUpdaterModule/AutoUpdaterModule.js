import * as AutoUpdateType from '../AutoUpdateType/AutoUpdateType.js'
import * as AutoUpdaterAppImage from '../AutoUpdaterAppImage/AutoUpdaterAppImage.js'
import * as AutoUpdaterNsis from '../AutoUpdaterNsis/AutoUpdaterNsis.js'
import * as AutoUpdaterDeb from '../AutoUpdaterDeb/AutoUpdaterDeb.js'

export const getModule = (type) => {
  switch (type) {
    case AutoUpdateType.AppImage:
      return AutoUpdaterAppImage
    case AutoUpdateType.WindowsNsis:
      return AutoUpdaterNsis
    case AutoUpdateType.Deb:
      return AutoUpdaterDeb
    default:
      return undefined
  }
}
