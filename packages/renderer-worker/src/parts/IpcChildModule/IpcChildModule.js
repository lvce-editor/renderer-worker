import { IpcChildWithModuleWorker } from '@lvce-editor/ipc'
import * as IpcChildType from '../IpcChildType/IpcChildType.js'

export const getModule = (method) => {
  switch (method) {
    case IpcChildType.ModuleWorker:
      return IpcChildWithModuleWorker
    default:
      throw new Error('unexpected ipc type')
  }
}
