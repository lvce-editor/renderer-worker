import * as AssetDir from '../AssetDir/AssetDir.js'
import * as PanelWorker from '../PanelWorker/PanelWorker.js'
import * as Platform from '../Platform/Platform.js'

export const create = (id, uri, x, y, width, height) => {
  return {
    commands: [],
    filteredItems: [],
    focused: false,
    focusedIndex: -1,
    panelItems: [],
    selectedIndex: -1,
    uid: id,
    height,
    width,
    x,
    y,
  }
}

export const loadContent = async (state) => {
  const savedState = {}
  await PanelWorker.invoke('Panel.create', state.uid, '', state.x, state.y, state.width, state.height, Platform.platform, AssetDir.assetDir)
  await PanelWorker.invoke('Panel.loadContent', state.uid, savedState)
  const diffResult = await PanelWorker.invoke('Panel.diff2', state.uid)
  const commands = await PanelWorker.invoke('Panel.render2', state.uid, diffResult)
  return {
    ...state,
    commands,
  }
}

export const hotReload = async (state) => {
  if (state.isHotReloading) {
    return state
  }
  state.isHotReloading = true
  const savedState = await PanelWorker.invoke('Panel.saveState', state.uid)
  await PanelWorker.restart('Panel.terminate')
  await PanelWorker.invoke('Panel.create', state.uid, '', state.x, state.y, state.width, state.height, Platform.platform, AssetDir.assetDir)
  await PanelWorker.invoke('Panel.loadContent', state.uid, savedState)
  const diffResult = await PanelWorker.invoke('Panel.diff2', state.uid)
  const commands = await PanelWorker.invoke('Panel.render2', state.uid, diffResult)
  state.isHotReloading = false
  return {
    ...state,
    commands,
  }
}
