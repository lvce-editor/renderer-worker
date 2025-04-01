import * as IpcChildType from '../IpcChildType/IpcChildType.js'

export const getModule = (method) => {
  switch (method) {
    case IpcChildType.ModuleWorker:
      return {}
    default:
      throw new Error('unexpected ipc type')
  }
}
