import * as SimpleBrowser from './ViewletSimpleBrowser.js'
import * as ViewletSimpleBrowserOpenExternal from './ViewletSimpleBrowserOpenExternal.js'
import * as ViewletSimpleBrowserOpenBackgroundTab from './ViewletSimpleBrowserOpenBackgroundTab.js'
import * as ViewletSimpleBrowserHandleContextMenu from './ViewletSimpleBrowserHandleContextMenu.js'
import * as ViewletSimpleBrowserInspectElement from './ViewletSimpleBrowserInspectElement.js'
import * as ViewletSimpleBrowserCopyImage from './ViewletSimpleBrowserCopyImage.js'
import * as ViewletSimpleBrowserBackward from './ViewletSimpleBrowserBackward.js'
import * as ViewletSimpleBrowserForward from './ViewletSimpleBrowserForward.js'
import * as ViewletSimpleBrowserOpenDevtools from './ViewletSimpleBrowserOpenDevtools.js'
import * as ViewletSimpleBrowserReload from './ViewletSimpleBrowserReload.js'
import * as ViewletSimpleBrowserCancelNavigation from './ViewletSimpleBrowserCancelNavigation.js'

// prettier-ignore
export const Commands = {
  go: SimpleBrowser.go,
  handleDidNavigate: SimpleBrowser.handleDidNavigate,
  handleDidNavigationCancel: SimpleBrowser.handleDidNavigationCancel,
  handleInput: SimpleBrowser.handleInput,
  handleTitleUpdated: SimpleBrowser.handleTitleUpdated,
  handleWillNavigate: SimpleBrowser.handleWillNavigate,
  handleKeyBinding: SimpleBrowser.handleKeyBinding,
  openExternal:ViewletSimpleBrowserOpenExternal.openExternal,
  openBackgroundTab:ViewletSimpleBrowserOpenBackgroundTab.openBackgroundTab,
  handleContextMenu:ViewletSimpleBrowserHandleContextMenu.handleContextMenu,
  inspectElement:ViewletSimpleBrowserInspectElement.inspectElement,
  copyImage:ViewletSimpleBrowserCopyImage.copyImage,
  backward:ViewletSimpleBrowserBackward.backward,
  forward:ViewletSimpleBrowserForward.forward,
  openDevtools:ViewletSimpleBrowserOpenDevtools.openDevtools,
  reload:ViewletSimpleBrowserReload.reload,
  cancelNavigation:ViewletSimpleBrowserCancelNavigation.cancelNavigation,
}

export const LazyCommands = {}

export const Events = {
  'browser-view-did-navigate': SimpleBrowser.handleDidNavigate,
  'browser-view-title-updated': SimpleBrowser.handleTitleUpdated,
  'browser-view-will-navigate': SimpleBrowser.handleWillNavigate,
}
