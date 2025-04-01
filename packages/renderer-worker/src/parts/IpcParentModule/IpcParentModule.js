import * as IpcParentType from '../IpcParentType/IpcParentType.js'
import * as IpcParentWithElectronMessagePort from '../IpcParentWithElectronMessagePort/IpcParentWithElectronMessagePort.js'
import * as IpcParentWithMessagePort from '../IpcParentWithMessagePort/IpcParentWithMessagePort.js'
import * as IpcParentWithModuleWorker from '../IpcParentWithModuleWorker/IpcParentWithModuleWorker.js'
import * as IpcParentWithModuleWorkerAndWorkaroundForChromeDevtoolsBug from '../IpcParentWithModuleWorkerAndWorkaroundForChromeDevtoolsBug/IpcParentWithModuleWorkerAndWorkaroundForChromeDevtoolsBug.js'
import * as IpcParentWithNode from '../IpcParentWithNode/IpcParentWithNode.js'
import * as IpcParentWithNodeAlternate from '../IpcParentWithNodeAlternate/IpcParentWithNodeAlternate.js'
import * as IpcParentWithReferencePort from '../IpcParentWithReferencePort/IpcParentWithReferencePort.js'
import * as IpcParentWithWebSocket from '../IpcParentWithWebSocket/IpcParentWithWebSocket.js'

export const getModule = (method) => {
  switch (method) {
    case IpcParentType.ElectronMessagePort:
      return IpcParentWithElectronMessagePort
    case IpcParentType.MessagePort:
      return IpcParentWithMessagePort
    case IpcParentType.ModuleWorker:
      return IpcParentWithModuleWorker
    case IpcParentType.ReferencePort:
      return IpcParentWithReferencePort
    case IpcParentType.WebSocket:
      return IpcParentWithWebSocket
    case IpcParentType.ModuleWorkerAndWorkaroundForChromeDevtoolsBug:
      return IpcParentWithModuleWorkerAndWorkaroundForChromeDevtoolsBug
    case IpcParentType.Node:
      return IpcParentWithNode
    case IpcParentType.NodeAlternate:
      return IpcParentWithNodeAlternate
    default:
      throw new Error('unexpected ipc type')
  }
}
