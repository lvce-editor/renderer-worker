import * as Platform from '../Platform/Platform.js'
import * as PlatformType from '../PlatformType/PlatformType.js'
import * as IpcParentWithWebSocket from '../IpcParentWithWebSocket/IpcParentWithWebSocket.js'
import * as IpcParentWithElectronMessagePort from '../IpcParentWithElectronMessagePort/IpcParentWithElectronMessagePort.js'

const getModule = () => {
  switch (Platform.platform) {
    case PlatformType.Web:
    case PlatformType.Remote:
      return IpcParentWithWebSocket
    case PlatformType.Electron:
      return IpcParentWithElectronMessagePort
    default:
      throw new Error('unsupported platform')
  }
}

export const create = async (options) => {
  const module = getModule()
  const rawIpc = await module.create(options)
  if (options.raw) {
    return rawIpc
  }
  return {
    rawIpc,
    module,
  }
}

export const wrap = ({ rawIpc, module }) => {
  return module.wrap(rawIpc)
}
