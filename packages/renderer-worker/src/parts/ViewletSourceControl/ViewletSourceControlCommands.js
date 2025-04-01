import * as VirtualList from '../VirtualList/VirtualList.ipc.js'
import * as ViewletSourceControl from './ViewletSourceControl.js'
import * as ViewletSourceControlHandleContextMenu from './ViewletSourceControlHandleContextMenu.js'
import * as ViewletSourceControlHandleClick from './ViewletSourceControlHandleClick.js'
import * as ViewletSourceControlHandleButtonClick from './ViewletSourceControlHandleButtonClick.js'
import * as ViewletSourceControlAcceptInput from './ViewletSourceControlAcceptInput.js'
import * as ViewletSourceControlHandleFocus from './ViewletSourceControlHandleFocus.js'

// prettier-ignore
export const Commands = {
  handleInput: ViewletSourceControl.handleInput,
  handleMouseOver: ViewletSourceControl.handleMouseOver,
  handleMouseOut: ViewletSourceControl.handleMouseOut,
  handleContextMenu: ViewletSourceControlHandleContextMenu.handleContextMenu,
  handleClick: ViewletSourceControlHandleClick.handleClick,
  handleButtonClick: ViewletSourceControlHandleButtonClick.handleButtonClick,
  acceptInput: ViewletSourceControlAcceptInput.acceptInput,
  handleFocus: ViewletSourceControlHandleFocus.handleFocus,

}

export const LazyCommands = {
  ...VirtualList.LazyCommands,
}
