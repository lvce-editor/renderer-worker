import * as ViewletAbout from '../ViewletAbout/ViewletAbout.ipc.ts'
import * as ViewletActivityBar from '../ViewletActivityBar/ViewletActivityBar.ipc.ts'
import * as ViewletAudio from '../ViewletAudio/ViewletAudio.ipc.js'
import * as ViewletBrowserViewOverview from '../ViewletBrowserViewOverview/ViewletBrowserViewOverview.ipc.js'
import * as ViewletClock from '../ViewletClock/ViewletClock.ipc.js'
import * as ViewletConfirm from '../ViewletConfirm/ViewletConfirm.ipc.js'
import * as ViewletDebugConsole from '../ViewletDebugConsole/ViewletDebugConsole.ipc.js'
import * as ViewletDefineKeyBinding from '../ViewletDefineKeyBinding/ViewletDefineKeyBinding.ipc.js'
import * as ViewletDialog from '../ViewletDialog/ViewletDialog.ipc.js'
import * as ViewletDiffEditor from '../ViewletDiffEditor/ViewletDiffEditor.ipc.js'
import * as ViewletE2eTest from '../ViewletE2eTest/ViewletE2eTest.ipc.ts'
import * as ViewletE2eTests from '../ViewletE2eTests/ViewletE2eTests.ipc.ts'
import * as ViewletEditorText from '../ViewletEditorText/ViewletEditorText.ipc.js'
import * as ViewletEditorWidgetError from '../ViewletEditorWidgetError/ViewletEditorWidgetError.ipc.js'
import * as ViewletEmptyEditor from '../ViewletEmptyEditor/ViewletEmptyEditor.ipc.js'
import * as ViewletExplorer from '../ViewletExplorer/ViewletExplorer.ipc.js'
import * as ViewletExtensionDetail from '../ViewletExtensionDetail/ViewletExtensionDetail.ipc.ts'
import * as ViewletExtensions from '../ViewletExtensions/ViewletExtensions.ipc.js'
import * as ViewletIframeInspector from '../ViewletIframeInspector/ViewletIframeInspector.ipc.ts'
import * as ViewletImplementations from '../ViewletImplementations/ViewletImplementations.ipc.js'
import * as ViewletInlineDiffEditor from '../ViewletInlineDiffEditor/ViewletInlineDiffEditor.ipc.js'
import * as ViewletKeyBindings from '../ViewletKeyBindings/ViewletKeyBindings.ipc.js'
import * as ViewletLayout from '../ViewletLayout/ViewletLayout.ipc.js'
import * as ViewletMain from '../ViewletMain/ViewletMain.ipc.js'
import * as ViewletMarkDownPreview from '../ViewletMarkDownPreview/ViewletMarkDownPreview.ipc.js'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.js'
import * as ViewletNoop from '../ViewletNoop/ViewletNoop.ipc.js'
import * as ViewletOutput from '../ViewletOutput/ViewletOutput.ipc.ts'
import * as ViewletPanel from '../ViewletPanel/ViewletPanel.ipc.js'
import * as ViewletProblems from '../ViewletProblems/ViewletProblems.ipc.js'
import * as ViewletQuickPick from '../ViewletQuickPick/ViewletQuickPick.ipc.js'
import * as ViewletReferences from '../ViewletReferences/ViewletReferences.ipc.js'
import * as ViewletRunAndDebug from '../ViewletRunAndDebug/ViewletRunAndDebug.ipc.js'
import * as ViewletScreenCapture from '../ViewletScreenCapture/ViewletScreenCapture.ipc.js'
import * as ViewletSearch from '../ViewletSearch/ViewletSearch.ipc.ts'
import * as ViewletSideBar from '../ViewletSideBar/ViewletSideBar.ipc.js'
import * as ViewletSimpleBrowser from '../ViewletSimpleBrowser/ViewletSimpleBrowser.ipc.js'
import * as ViewletSourceControl from '../ViewletSourceControl/ViewletSourceControl.ipc.js'
import * as ViewletStatusBar from '../ViewletStatusBar/ViewletStatusBar.ipc.js'
import * as ViewletStorage from '../ViewletStorage/ViewletStorage.ipc.js'
import * as ViewletTerminal from '../ViewletTerminal/ViewletTerminal.ipc.ts'
import * as ViewletTerminals from '../ViewletTerminals/ViewletTerminals.ipc.js'
import * as ViewletTextEditorError from '../ViewletTextEditorError/ViewletTextEditorError.ipc.js'
import * as ViewletTitleBar from '../ViewletTitleBar/ViewletTitleBar.ipc.js'
import * as ViewletTitleBarButtons from '../ViewletTitleBarButtons/ViewletTitleBarButtons.ipc.js'
import * as ViewletTitleBarIcon from '../ViewletTitleBarIcon/ViewletTitleBarIcon.ipc.js'
import * as ViewletTitleBarMenuBar from '../ViewletTitleBarMenuBar/ViewletTitleBarMenuBar.ipc.js'
import * as ViewletTitleBarTitle from '../ViewletTitleBarTitle/ViewletTitleBarTitle.ipc.js'
import * as ViewletWebView from '../ViewletWebView/ViewletWebView.ipc.ts'

export const map = {
  [ViewletModuleId.About]: () => ViewletAbout,
  [ViewletModuleId.ActivityBar]: () => ViewletActivityBar,
  [ViewletModuleId.Audio]: () => ViewletAudio,
  [ViewletModuleId.BrowserViewOverview]: () => ViewletBrowserViewOverview,
  [ViewletModuleId.Clock]: () => ViewletClock,
  [ViewletModuleId.Confirm]: () => ViewletConfirm,
  [ViewletModuleId.DebugConsole]: () => ViewletDebugConsole,
  [ViewletModuleId.DefineKeyBinding]: () => ViewletDefineKeyBinding,
  [ViewletModuleId.Dialog]: () => ViewletDialog,
  [ViewletModuleId.IframeInspector]: () => ViewletIframeInspector,
  [ViewletModuleId.DiffEditor]: () => ViewletDiffEditor,
  [ViewletModuleId.E2eTest]: () => ViewletE2eTest,
  [ViewletModuleId.E2eTests]: () => ViewletE2eTests,
  [ViewletModuleId.EditorText]: () => ViewletEditorText,
  [ViewletModuleId.EditorWidgetError]: () => ViewletEditorWidgetError,
  [ViewletModuleId.EmptyEditor]: () => ViewletEmptyEditor,
  [ViewletModuleId.Explorer]: () => ViewletExplorer,
  [ViewletModuleId.ExtensionDetail]: () => ViewletExtensionDetail,
  [ViewletModuleId.Extensions]: () => ViewletExtensions,
  [ViewletModuleId.Implementations]: () => ViewletImplementations,
  [ViewletModuleId.InlineDiffEditor]: () => ViewletInlineDiffEditor,
  [ViewletModuleId.KeyBindings]: () => ViewletKeyBindings,
  [ViewletModuleId.Layout]: () => ViewletLayout,
  [ViewletModuleId.Main]: () => ViewletMain,
  [ViewletModuleId.MarkDownPreview]: () => ViewletMarkDownPreview,
  [ViewletModuleId.Noop]: () => ViewletNoop,
  [ViewletModuleId.Output]: () => ViewletOutput,
  [ViewletModuleId.Panel]: () => ViewletPanel,
  [ViewletModuleId.Problems]: () => ViewletProblems,
  [ViewletModuleId.QuickPick]: () => ViewletQuickPick,
  [ViewletModuleId.References]: () => ViewletReferences,
  [ViewletModuleId.RunAndDebug]: () => ViewletRunAndDebug,
  [ViewletModuleId.ScreenCapture]: () => ViewletScreenCapture,
  [ViewletModuleId.Search]: () => ViewletSearch,
  [ViewletModuleId.SideBar]: () => ViewletSideBar,
  [ViewletModuleId.SimpleBrowser]: () => ViewletSimpleBrowser,
  [ViewletModuleId.SourceControl]: () => ViewletSourceControl,
  [ViewletModuleId.StatusBar]: () => ViewletStatusBar,
  [ViewletModuleId.Storage]: () => ViewletStorage,
  [ViewletModuleId.Terminal]: () => ViewletTerminal,
  [ViewletModuleId.Terminals]: () => ViewletTerminals,
  [ViewletModuleId.TitleBar]: () => ViewletTitleBar,
  [ViewletModuleId.TitleBarButtons]: () => ViewletTitleBarButtons,
  [ViewletModuleId.TitleBarIcon]: () => ViewletTitleBarIcon,
  [ViewletModuleId.TitleBarMenuBar]: () => ViewletTitleBarMenuBar,
  [ViewletModuleId.TitleBarTitle]: () => ViewletTitleBarTitle,
  [ViewletModuleId.WebView]: () => ViewletWebView,
  [ViewletModuleId.EditorTextError]: () => ViewletTextEditorError,
}
