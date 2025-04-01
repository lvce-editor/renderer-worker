// Based on VS Code's KeyBindings Editor (License MIT):
// see https://github.com/microsoft/vscode/blob/6a5e3aad96929a7d35e09ed8d22e87a72bd16ff6/src/vs/workbench/services/preferences/browser/keybindingsEditorModel.ts
// see https://github.com/microsoft/vscode/blob/6a5e3aad96929a7d35e09ed8d22e87a72bd16ff6/src/vs/workbench/contrib/preferences/browser/keybindingsEditor.ts

import * as KeyBindingsViewWorker from '../KeyBindingsViewWorker/KeyBindingsViewWorker.js'

// TODO make this an extension that can create virtual dom in a webworker

export const create = (id, uri, x, y, width, height) => {
  return {
    parsedKeyBindings: [],
    filteredKeyBindings: [],
    minLineY: 0,
    maxLineY: 0,
    maxVisibleItems: 0,
    rowHeight: 24,
    x,
    y,
    width,
    height,
    value: '',
    selectedIndex: -1,
    focusedIndex: -1,
    finalDeltaY: 0,
    deltaY: 0,
    uri,
    columnWidth1: 0,
    columnWidth2: 0,
    columnWidth3: 0,
    contentPadding: 30,
    resizerDownId: 0,
    defineKeyBindingsId: -1,
    editIconSize: 22,
    padding: 15,
    searchHeaderHeight: 50,
    tableHeaderHeight: 24,
    uid: id,
  }
}

export const saveState = (state) => {
  return KeyBindingsViewWorker.invoke('KeyBindings.saveState', state.uid)
}

export const loadContent = async (state, savedState) => {
  await KeyBindingsViewWorker.invoke('KeyBindings.create', state.uid, state.uri, state.x, state.y, state.width, state.height)
  await KeyBindingsViewWorker.invoke('KeyBindings.loadContent', state.uid, savedState)
  const diffResult = await KeyBindingsViewWorker.invoke('KeyBindings.diff2', state.uid)
  const commands = await KeyBindingsViewWorker.invoke('KeyBindings.render3', state.uid, diffResult)
  return {
    ...state,
    commands,
  }
}

export const hotReload = async (state) => {
  if (state.isHotReloading) {
    return state
  }
  // TODO avoid mutation
  state.isHotReloading = true
  // possible TODO race condition during hot reload
  // there could still be pending promises when the worker is disposed
  const savedState = await KeyBindingsViewWorker.invoke('KeyBindings.saveState', state.uid)
  await KeyBindingsViewWorker.restart('KeyBindings.terminate')
  const oldState = {
    ...state,
    items: [],
  }
  await KeyBindingsViewWorker.invoke('KeyBindings.create', state.uid, state.uri, state.x, state.y, state.width, state.height)
  await KeyBindingsViewWorker.invoke('KeyBindings.loadContent', state.uid, savedState)
  const diffResult = await KeyBindingsViewWorker.invoke('KeyBindings.diff2', state.uid)
  const commands = await KeyBindingsViewWorker.invoke('KeyBindings.render3', oldState.uid, diffResult)
  return {
    ...oldState,
    commands,
    isHotReloading: false,
  }
}
