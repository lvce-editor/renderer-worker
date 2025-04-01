import * as VirtualListFocusFirst from './VirtualListFocusFirst.js'
import * as VirtualListFocusIndex from './VirtualListFocusIndex.js'
import * as VirtualListFocusLast from './VirtualListFocusLast.js'
import * as VirtualListFocusNext from './VirtualListFocusNext.js'
import * as VirtualListFocusNextPage from './VirtualListFocusNextPage.js'
import * as VirtualListFocusPrevious from './VirtualListFocusPrevious.js'
import * as VirtualListFocusPreviousPage from './VirtualListFocusPreviousPage.js'
import * as VirtualListHandleTouchEnd from './VirtualListHandleTouchEnd.js'
import * as VirtualListHandleTouchMove from './VirtualListHandleTouchMove.js'
import * as VirtualListHandleTouchStart from './VirtualListHandleTouchStart.js'
import * as VirtualListHandleWheel from './VirtualListHandleWheel.js'
import * as VirtualListHandleScrollBarMove from './VirtualListHandleScrollBarMove.js'
import * as VirtualListHandleClickAt from './VirtualListHandleClickAt.js'
import * as VirtualListScrollDown from './VirtualListScrollDown.js'

export const LazyCommands = {
  focusFirst: () => VirtualListFocusFirst,
  focusIndex: () => VirtualListFocusIndex,
  focusLast: () => VirtualListFocusLast,
  focusNext: () => VirtualListFocusNext,
  focusNextPage: () => VirtualListFocusNextPage,
  focusPrevious: () => VirtualListFocusPrevious,
  focusPreviousPage: () => VirtualListFocusPreviousPage,
  handleTouchEnd: () => VirtualListHandleTouchEnd,
  handleTouchMove: () => VirtualListHandleTouchMove,
  handleTouchStart: () => VirtualListHandleTouchStart,
  handleWheel: () => VirtualListHandleWheel,
  handleScrollBarMove: () => VirtualListHandleScrollBarMove,
  handleScrollBarThumbPointerMove: () => VirtualListHandleScrollBarMove,
  handleScrollBarClick: () => VirtualListHandleScrollBarMove,
  handleScrollBarCaptureLost: () => VirtualListHandleScrollBarMove,
  handleClickAt: () => VirtualListHandleClickAt,
  scrollDown: () => VirtualListScrollDown,
}
