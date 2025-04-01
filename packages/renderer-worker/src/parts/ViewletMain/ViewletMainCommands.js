import * as ViewletMain from './ViewletMain.js'
import * as ViewletMainOpenUri from './ViewletMainOpenUri.ts'
import * as ViewletMainCloseTabsLeft from './ViewletMainCloseTabsLeft.ts'
import * as ViewletMainCloseTabsRight from './ViewletMainCloseTabsRight.ts'
import * as ViewletMainCloseOthers from './ViewletMainCloseOthers.ts'
import * as ViewletMainCloseAllEditors from './ViewletMainCloseAllEditors.ts'
import * as ViewletMainCloseActiveEditor from './ViewletMainCloseActiveEditor.ts'
import * as ViewletMainCloseEditor from './ViewletMainCloseEditor.ts'
import * as ViewletMainFocusIndex from './ViewletMainFocusIndex.js'
import * as ViewletMainHandleDropFilePath from './ViewletMainHandleDropFilePath.js'
import * as ViewletMainSplitRight from './ViewletMainSplitRight.ts'
import * as ViewletMainHandleTabsWheel from './ViewletMainHandleTabsWheel.js'
import * as ViewletMainHandleTabClick from './ViewletMainFocusIndex.js'
import * as ViewletMainHandleTabsPointerOver from './ViewletMainHandleTabsPointerOver.js'
import * as ViewletMainHandleTabsPointerOut from './ViewletMainHandleTabsPointerOut.js'
import * as ViewletMainHandleContextMenu from './ViewletMainHandleContextMenu.js'
import * as ViewletMainFindFileReferences from './ViewletMainFindFileReferences.js'

export const Commands = {
  focus: ViewletMain.focus,
  handleDragEnd: ViewletMain.handleDragEnd,
  handleDragOver: ViewletMain.handleDragOver,
  handleDragLeave: ViewletMain.handleDragLeave,
  handleTabContextMenu: ViewletMain.handleTabContextMenu,
  openBackgroundTab: ViewletMain.openBackgroundTab,
  save: ViewletMain.save,
  handleClickClose: ViewletMain.handleClickClose,
  reopenEditorWith: ViewletMain.reopenEditorWith,
  openKeyBindings: ViewletMain.openKeyBindings,
  handleTabsWheel: ViewletMainHandleTabsWheel.handleTabsWheel,
  handleTabClick: ViewletMainHandleTabClick.handleTabClick,
  handleTabsPointerOver: ViewletMainHandleTabsPointerOver.handleTabsPointerOver,
  handleTabsPointerOut: ViewletMainHandleTabsPointerOut.handleTabsPointerOut,
  handleContextMenu: ViewletMainHandleContextMenu.handleContextMenu,
  findFileReferences: ViewletMainFindFileReferences.findFileReferences,
}

export const CommandsWithSideEffects = {
  openUri: ViewletMainOpenUri.openUri,
  handleDrop: ViewletMain.handleDrop,
  handleTabDrop: ViewletMain.handleTabDrop,
  handleTabsDragOver: ViewletMain.handleTabsDragOver,
  closeTabsLeft: ViewletMainCloseTabsLeft.closeTabsLeft,
  closeTabsRight: ViewletMainCloseTabsRight.closeTabsRight,
  closeOthers: ViewletMainCloseOthers.closeOthers,
  closeAllEditors: ViewletMainCloseAllEditors.closeAllEditors,
  closeActiveEditor: ViewletMainCloseActiveEditor.closeActiveEditor,
  closeFocusedTab: ViewletMainCloseActiveEditor.closeFocusedTab,
  closeEditor: ViewletMainCloseEditor.closeEditor,
  focusFirst: ViewletMainFocusIndex.focusFirst,
  focusLast: ViewletMainFocusIndex.focusLast,
  focusNext: ViewletMainFocusIndex.focusNext,
  focusPrevious: ViewletMainFocusIndex.focusPrevious,
  handleDropFilePath: ViewletMainHandleDropFilePath.handleDropFilePath,
  splitRight: ViewletMainSplitRight.splitRight,
}

export const CommandsWithSideEffectsLazy = {}

export const LazyCommands = {}
