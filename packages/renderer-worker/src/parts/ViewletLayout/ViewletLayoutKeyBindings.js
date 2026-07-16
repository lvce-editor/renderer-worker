import * as KeyCode from '../KeyCode/KeyCode.js'
import * as KeyModifier from '../KeyModifier/KeyModifier.js'
import * as WhenExpression from '../WhenExpression/WhenExpression.js'

export const getKeyBindings = () => {
  return [
    {
      key: KeyCode.Escape,
      command: 'Viewlet.closeWidget',
      when: WhenExpression.FocusFindWidget,
      args: ['FindWidget'],
    },
    {
      key: KeyCode.Enter,
      command: 'EditorRename.finish',
      when: WhenExpression.FocusEditorRename,
    },
    {
      key: KeyCode.Escape,
      command: 'EditorRename.abort',
      when: WhenExpression.FocusEditorRename,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyB,
      command: 'Layout.toggleSideBar',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyM,
      command: 'Layout.toggleActivityBar',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Backquote,
      command: 'Layout.togglePanel',
      args: ['Terminal'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyM,
      command: 'ViewService.toggleView',
      args: ['Output'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Enter,
      command: 'Source Control.acceptInput',
      when: WhenExpression.FocusSourceControlInput,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyN,
      command: 'Explorer.newFile',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyP,
      command: 'QuickPick.showFile',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyP,
      command: 'QuickPick.showEverything',
    },
    {
      key: KeyCode.F1,
      command: 'QuickPick.showEverything',
    },

    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyX,
      command: 'Focus.set',
      args: ['Extensions'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyG,
      command: 'Focus.set',
      args: ['Source Control'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyE,
      command: 'Focus.set',
      args: ['Explorer'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyF,
      command: 'Focus.set',
      args: ['Search'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyY,
      command: 'Focus.set',
      args: ['Debug Console'],
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyM,
      command: 'Focus.set',
      args: ['Problems'],
    },

    {
      key: KeyModifier.CtrlCmd | KeyCode.Comma,
      command: 'Preferences.openSettingsJson',
    },

    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyD,
      command: 'Focus.set',
      args: ['Run and Debug'],
    },

    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyI,
      command: 'Developer.toggleDeveloperTools',
      when: WhenExpression.BrowserElectron,
    },
    {
      key: KeyCode.F6,
      command: 'Navigation.focusNextPart',
    },
    {
      key: KeyModifier.Shift | KeyCode.F6,
      command: 'Navigation.focusPreviousPart',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyG,
      command: 'QuickPick.openGoToLine',
    },

    {
      key: KeyCode.Escape,
      command: 'dialog.close',
      when: WhenExpression.FocusDialog,
    },
    {
      key: KeyCode.DownArrow,
      command: 'Menu.focusNext',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyCode.UpArrow,
      command: 'Menu.focusPrevious',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyCode.Enter,
      command: 'Menu.selectCurrent',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyCode.Space,
      command: 'Menu.selectCurrent',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyCode.Home,
      command: 'Menu.focusFirst',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyCode.End,
      command: 'Menu.focusLast',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyCode.Escape,
      command: 'Menu.hide',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyN,
      command: 'ElectronWindow.openNew',
      when: WhenExpression.BrowserElectron,
    },
    {
      key: KeyCode.Tab,
      command: 'Menu.noop',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'Menu.noop',
      when: WhenExpression.FocusMenu,
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyR,
      command: 'QuickPick.showRecent',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Digit0,
      command: 'SideBar.focus',
    },
    {
      key: KeyModifier.Shift | KeyCode.UpArrow,
      command: 'Editor.selectUp',
    },
    {
      key: KeyModifier.Shift | KeyCode.DownArrow,
      command: 'Editor.selectDown',
    },

    {
      key: KeyModifier.CtrlCmd | KeyCode.Equal,
      command: 'Window.zoomIn',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Plus,
      command: 'Window.zoomIn',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Minus,
      command: 'Window.zoomOut',
    },
    {
      key: KeyCode.Enter,
      command: 'SimpleBrowser.go',
      when: WhenExpression.FocusSimpleBrowserInput,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyR,
      command: 'Reload.reload',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Backslash,
      command: 'Run And Debug.togglePause',
    },
    {
      key: KeyCode.Enter,
      command: 'Run And Debug.handleEvaluate',
      when: WhenExpression.FocusDebugInput,
    },
    {
      key: KeyCode.F11,
      command: 'Window.toggleFullScreen',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyN,
      command: 'Main.newFile',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyN,
      command: 'Window.openNew',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyO,
      command: 'Dialog.openFile',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyS,
      command: 'Main.save',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyZ,
      command: 'Editor.undo',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyY,
      command: 'Editor.redo',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyX,
      command: 'Editor.cut',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyC,
      command: 'Editor.copy',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyV,
      command: 'Editor.paste',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Slash,
      command: 'Editor.toggleLineComment',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyA,
      command: 'Editor.selectAll',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyD,
      command: 'Editor.copyLineDown',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.UpArrow,
      command: 'Editor.moveLineUp',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.DownArrow,
      command: 'Editor.moveLineDown',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.Alt | KeyModifier.Shift | KeyCode.UpArrow,
      command: 'Editor.addCursorAbove',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.Alt | KeyModifier.Shift | KeyCode.DownArrow,
      command: 'Editor.addCursorBelow',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.Alt | KeyCode.F3,
      command: 'Editor.selectAllOccurrences',
      when: WhenExpression.FocusEditorText,
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyP,
      command: 'Command.openCommandPalette',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyE,
      command: 'Explorer.focus',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyF,
      command: 'Search.focus',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyG,
      command: 'SourceControl.focus',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyD,
      command: 'Run.focus',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyX,
      command: 'Extensions.focus',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyM,
      command: 'Problems.toggle',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyU,
      command: 'Output.toggle',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyJ,
      command: 'Layout.togglePanel',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Alt | KeyCode.KeyB,
      command: 'Layout.toggleSecondarySideBar',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Numpad0,
      command: 'Window.zoomReset',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Backslash,
      command: 'MainArea.splitRight',
    },
    {
      key: KeyModifier.Alt | KeyModifier.Shift | KeyCode.Digit8,
      command: 'MainArea.flipEditorLayout',
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyP,
      command: 'QuickPick.showFile',
    },
    {
      args: ['workspace-symbol'],
      key: KeyModifier.CtrlCmd | KeyCode.KeyT,
      command: 'QuickPick.show',
    },
    {
      key: KeyModifier.CtrlCmd | KeyModifier.Shift | KeyCode.KeyP,
      command: 'QuickPick.showCommands',
    },
  ]
}
