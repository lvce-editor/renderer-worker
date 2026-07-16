import * as GetConfiguredWorkerUrl from '../GetConfiguredWorkerUrl/GetConfiguredWorkerUrl.ts'
import * as HandleIpc from '../HandleIpc/HandleIpc.js'
import * as IpcParent from '../IpcParent/IpcParent.js'
import * as IpcParentType from '../IpcParentType/IpcParentType.js'
import * as PanelWorkerUrl from '../PanelWorkerUrl/PanelWorkerUrl.js'

export const launchPanelWorker = async () => {
  const configuredWorkerUrl = GetConfiguredWorkerUrl.getConfiguredWorkerUrl('develop.panelWorkerPath', PanelWorkerUrl.panelWorkerUrl)
  const ipc = await IpcParent.create({
    method: IpcParentType.ModuleWorkerAndWorkaroundForChromeDevtoolsBug,
    name: 'Panel Worker',
    url: configuredWorkerUrl,
  })
  HandleIpc.handleIpc(ipc)
  return ipc
}
