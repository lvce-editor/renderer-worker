import * as About from '../About/About.ipc.js'
import * as Ajax from '../Ajax/Ajax.ipc.js'
import * as Audio from '../Audio/Audio.ipc.js'
import * as AutoUpdater from '../AutoUpdater/AutoUpdater.ipc.js'
import * as Blob from '../Blob/Blob.ipc.js'
import * as BulkReplacement from '../BulkReplacement/BulkReplacement.ipc.js'
import * as CacheStorage from '../CacheStorage/CacheStorage.ipc.js'
import * as Callback from '../Callback/Callback.ipc.js'
import * as Chrome from '../Chrome/Chrome.ipc.js'
import * as ClipBoard from '../ClipBoard/ClipBoard.ipc.js'
import * as ColorTheme from '../ColorTheme/ColorTheme.ipc.js'
import * as ConfirmPrompt from '../ConfirmPrompt/ConfirmPrompt.ipc.js'
import * as ContentTracing from '../ContentTracing/ContentTracing.ipc.js'
import * as ContextMenu from '../ContextMenu/ContextMenu.ipc.js'
import * as Debug from '../Debug/Debug.ipc.js'
import * as DebugSharedProcess from '../DebugSharedProcess/DebugSharedProcess.ipc.js'
import * as Developer from '../Developer/Developer.ipc.js'
import * as Dialog from '../Dialog/Dialog.ipc.js'
import * as Download from '../Download/Download.ipc.js'
import * as EditorDiagnostics from '../EditorDiagnostics/EditorDiagnostics.ipc.js'
import * as EditorError from '../EditorError/EditorError.ipc.js'
import * as ElectronApplicationMenu from '../ElectronApplicationMenu/ElectronApplicationMenu.ipc.js'
import * as ElectronBrowserView from '../ElectronBrowserView/ElectronBrowserView.ipc.js'
import * as ElectronClipBoard from '../ElectronClipBoard/ElectronClipBoard.ipc.js'
import * as ElectronContextMenu from '../ElectronContextMenu/ElectronContextMenu.ipc.js'
import * as ElectronDialog from '../ElectronDialog/ElectronDialog.ipc.js'
import * as ElectronWindow from '../ElectronWindow/ElectronWindow.ipc.js'
import * as ErrorHandling from '../ErrorHandling/ErrorHandling.ipc.js'
import * as Exit from '../Exit/Exit.ipc.js'
import * as ExtensionHostBraceCompletion from '../ExtensionHost/ExtensionHostBraceCompletion.ipc.js'
import * as ExtensionHostClosingTag from '../ExtensionHost/ExtensionHostClosingTagCompletion.ipc.js'
import * as ExtensionHostCore from '../ExtensionHost/ExtensionHostCore.ipc.js'
import * as ExtensionHostDefinition from '../ExtensionHost/ExtensionHostDefinition.ipc.js'
import * as ExtensionHostDialog from '../ExtensionHost/ExtensionHostDialog.ipc.js'
import * as ExtensionHostHover from '../ExtensionHost/ExtensionHostHover.ipc.js'
import * as ExtensionHostOrganizeImports from '../ExtensionHost/ExtensionHostOrganizeImports.ipc.js'
import * as ExtensionHostQuickPick from '../ExtensionHost/ExtensionHostQuickPick.ipc.js'
import * as ExtensionHostSelection from '../ExtensionHost/ExtensionHostSelection.ipc.js'
import * as ExtensionHostTabCompletion from '../ExtensionHost/ExtensionHostTabCompletion.ipc.js'
import * as ExtensionHostTextSearch from '../ExtensionHost/ExtensionHostTextSearch.ipc.js'
import * as ExtensionHostTypeDefinition from '../ExtensionHost/ExtensionHostTypeDefinition.ipc.js'
import * as ExtensionHostWorkerContentSecurityPolicy from '../ExtensionHost/ExtensionHostWorkerContentSecurityPolicy.ipc.js'
import * as ExtensionHostManagement from '../ExtensionHostManagement/ExtensionHostManagement.ipc.js'
import * as ExtensionManagement from '../ExtensionManagement/ExtensionManagement.ipc.js'
import * as ExtensionMeta from '../ExtensionMeta/ExtensionMeta.ipc.js'
import * as Extensions from '../Extensions/Extensions.ipc.js'
import * as ExtensionStateStorage from '../ExtensionStateStorage/ExtensionStateStorage.js'
import * as FilePicker from '../FilePicker/FilePicker.ipc.js'
import * as FileSystem from '../FileSystem/FileSystem.ipc.js'
import * as FileWatcher from '../FileWatcher/FileWatcher.ipc.js'
import * as Focus from '../Focus/Focus.ipc.js'
import * as GetEditorSourceActions from '../GetEditorSourceActions/GetEditorSourceActions.ipc.js'
import * as GetWindowId from '../GetWindowId/GetWindowId.ipc.js'
import * as IconTheme from '../IconTheme/IconTheme.ipc.js'
import * as ImagePreview from '../ImagePreview/ImagePreview.ipc.js'
import * as IncrementalTextSearch from '../IncrementalTextSearch/IncrementalTextSearch.ipc.js'
import * as IndexedDb from '../IndexedDb/IndexedDb.ipc.js'
import * as IpcParent from '../IpcParent/IpcParent.ipc.js'
import * as KeyBindings from '../KeyBindings/KeyBindings.ipc.js'
import * as KeyBindingsInitial from '../KeyBindingsInitial/KeyBindingsInitial.ipc.js'
import * as Languages from '../Languages/Languages.ipc.js'
import * as Listener from '../Listener/Listener.ipc.js'
import * as LocalStorage from '../LocalStorage/LocalStorage.ipc.js'
import * as Markdown from '../Markdown/Markdown.ipc.js'
import * as Menu from '../Menu/Menu.ipc.js'
import * as Mime from '../Mime/Mime.ipc.js'
import * as ModuleId from '../ModuleId/ModuleId.js'
import * as NativeHost from '../NativeHost/NativeHost.ipc.js'
import * as Navigation from '../Navigation/Navigation.ipc.js'
import * as Notification from '../Notification/Notification.ipc.js'
import * as OffscreenCanvas from '../OffscreenCanvas/OffscreenCanvas.ipc.js'
import * as Open from '../Open/Open.ipc.js'
import * as OpenNativeFolder from '../OpenNativeFolder/OpenNativeFolder.ipc.js'
import * as PersistentFileHandle from '../PersistentFileHandle/PersistentFileHandle.ipc.js'
import * as PointerCapture from '../PointerCapture/PointerCapture.ipc.js'
import * as Preferences from '../Preferences/Preferences.ipc.js'
import * as Process from '../Process/Process.ipc.js'
import * as Prompt from '../Prompt/Prompt.ipc.js'
import * as QuickPick from '../QuickPick/QuickPick.ipc.js'
import * as RebuildNodePty from '../RebuildNodePty/RebuildNodePty.ipc.js'
import * as RecentlyOpened from '../RecentlyOpened/RecentlyOpened.ipc.js'
import * as Reload from '../Reload/Reload.ipc.js'
import * as SaveFileAs from '../SaveFileAs/SaveFileAs.ipc.js'
import * as SaveState from '../SaveState/SaveState.ipc.js'
import * as SearchProcess from '../SearchProcess/SearchProcess.ipc.js'
import * as SendMessagePortToElectron from '../SendMessagePortToElectron/SendMessagePortToElectron.ipc.js'
import * as SendMessagePortToExtensionHostWorker from '../SendMessagePortToExtensionHostWorker/SendMessagePortToExtensionHostWorker.ipc.js'
import * as SendMessagePortToRendererProcess from '../SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ipc.js'
import * as SendMessagePortToSyntaxHighlightingWorker from '../SendMessagePortToSyntaxHighlightingworker/SendMessagePortToSyntaxHighlightingWorker.ipc.js'
import * as SessionReplay from '../SessionReplay/SessionReplay.ipc.js'
import * as SessionStorage from '../SessionStorage/SessionStorage.ipc.js'
import * as Test from '../Test/Test.ipc.js'
import * as TestFrameWork from '../TestFrameWork/TestFrameWork.ipc.js'
import * as Transferrable from '../Transferrable/Transferrable.ipc.js'
import * as Url from '../Url/Url.ipc.js'
import * as Viewlet from '../Viewlet/Viewlet.ipc.js'
import * as WebView from '../WebView/WebView.ipc.ts'
import * as Window from '../Window/Window.ipc.js'
import * as WindowTitle from '../WindowTitle/WindowTitle.ipc.js'
import * as Workspace from '../Workspace/Workspace.ipc.js'

export const load = (moduleId) => {
  switch (moduleId) {
    case ModuleId.About:
      return About
    case ModuleId.Ajax:
      return Ajax
    case ModuleId.Audio:
      return Audio
    case ModuleId.AutoUpdater:
      return AutoUpdater
    case ModuleId.GetEditorSourceActions:
      return GetEditorSourceActions
    case ModuleId.Blob:
      return Blob
    case ModuleId.BulkReplacement:
      return BulkReplacement
    case ModuleId.CacheStorage:
      return CacheStorage
    case ModuleId.Callback:
      return Callback
    case ModuleId.Chrome:
      return Chrome
    case ModuleId.ClipBoard:
      return ClipBoard
    case ModuleId.ColorTheme:
      return ColorTheme
    case ModuleId.ConfirmPrompt:
      return ConfirmPrompt
    case ModuleId.ContentTracing:
      return ContentTracing
    case ModuleId.ContextMenu:
      return ContextMenu
    case ModuleId.Debug:
      return Debug
    case ModuleId.DebugSharedProcess:
      return DebugSharedProcess
    case ModuleId.Developer:
      return Developer
    case ModuleId.Dialog:
      return Dialog
    case ModuleId.Download:
      return Download
    case ModuleId.EditorDiagnostics:
      return EditorDiagnostics
    case ModuleId.EditorError:
      return EditorError
    case ModuleId.ElectronApplicationMenu:
      return ElectronApplicationMenu
    case ModuleId.ElectronBrowserView:
      return ElectronBrowserView
    case ModuleId.ElectronClipBoard:
      return ElectronClipBoard
    case ModuleId.ElectronContextMenu:
      return ElectronContextMenu
    case ModuleId.ElectronWindow:
      return ElectronWindow
    case ModuleId.ErrorHandling:
      return ErrorHandling
    case ModuleId.Exit:
      return Exit
    case ModuleId.ExtensionHostCode:
      return ExtensionHostCore
    case ModuleId.ExtensionMeta:
      return ExtensionMeta
    case ModuleId.Extensions:
      return Extensions
    case ModuleId.FilePicker:
      return FilePicker
    case ModuleId.FileSystem:
      return FileSystem
    case ModuleId.IconTheme:
      return IconTheme
    case ModuleId.ImagePreview:
      return ImagePreview
    case ModuleId.Focus:
      return Focus
    case ModuleId.IncrementalTextSearch:
      return IncrementalTextSearch
    case ModuleId.IndexedDb:
      return IndexedDb
    case ModuleId.IpcParent:
      return IpcParent
    case ModuleId.KeyBindings:
      return KeyBindings
    case ModuleId.KeyBindingsInitial:
      return KeyBindingsInitial
    case ModuleId.Listener:
      return Listener
    case ModuleId.LocalStorage:
      return LocalStorage
    case ModuleId.Menu:
      return Menu
    case ModuleId.Mime:
      return Mime
    case ModuleId.NativeHost:
      return NativeHost
    case ModuleId.Navigation:
      return Navigation
    case ModuleId.Notification:
      return Notification
    case ModuleId.Open:
      return Open
    case ModuleId.OpenNativeFolder:
      return OpenNativeFolder
    case ModuleId.PersistentFileHandle:
      return PersistentFileHandle
    case ModuleId.Preferences:
      return Preferences
    case ModuleId.Prompt:
      return Prompt
    case ModuleId.RebuildNodePty:
      return RebuildNodePty
    case ModuleId.RecentlyOpened:
      return RecentlyOpened
    case ModuleId.Reload:
      return Reload
    case ModuleId.SaveFileAs:
      return SaveFileAs
    case ModuleId.SaveState:
      return SaveState
    case ModuleId.SessionReplay:
      return SessionReplay
    case ModuleId.SessionStorage:
      return SessionStorage
    case ModuleId.Test:
      return Test
    case ModuleId.TestFrameWork:
      return TestFrameWork
    case ModuleId.Url:
      return Url
    case ModuleId.Viewlet:
      return Viewlet
    case ModuleId.Window:
      return Window
    case ModuleId.Workspace:
      return Workspace
    case ModuleId.WindowTitle:
      return WindowTitle
    case ModuleId.PointerCapture:
      return PointerCapture
    case ModuleId.QuickPick:
      return QuickPick
    case ModuleId.ExtensionHostQuickPick:
      return ExtensionHostQuickPick
    case ModuleId.ExtensionHostDialog:
      return ExtensionHostDialog
    case ModuleId.ExtensionHostWorkerContentSecurityPolicy:
      return ExtensionHostWorkerContentSecurityPolicy
    case ModuleId.SendMessagePortToElectron:
      return SendMessagePortToElectron
    case ModuleId.OffscreenCanvas:
      return OffscreenCanvas
    case ModuleId.Languages:
      return Languages
    case ModuleId.FileWatcher:
      return FileWatcher
    case ModuleId.ExtensionHostSelection:
      return ExtensionHostSelection
    case ModuleId.ExtensionHostBraceCompletion:
      return ExtensionHostBraceCompletion
    case ModuleId.ExtensionHostDefinition:
      return ExtensionHostDefinition
    case ModuleId.ExtensionHostTypeDefinition:
      return ExtensionHostTypeDefinition
    case ModuleId.ExtensionHostOrganizeImports:
      return ExtensionHostOrganizeImports
    case ModuleId.ExtensionHostTabCompletion:
      return ExtensionHostTabCompletion
    case ModuleId.ExtensionHostClosingTag:
      return ExtensionHostClosingTag
    case ModuleId.SendMessagePortToRendererProcess:
      return SendMessagePortToRendererProcess
    case ModuleId.ExtensionHostHover:
      return ExtensionHostHover
    case ModuleId.SendMessagePortToExtensionHostWorker:
      return SendMessagePortToExtensionHostWorker
    case ModuleId.ExtensionHostManagement:
      return ExtensionHostManagement
    case ModuleId.SendMessagePortToSyntaxHighlightingWorker:
      return SendMessagePortToSyntaxHighlightingWorker
    case ModuleId.Transferrable:
      return Transferrable
    case ModuleId.WebView:
      return WebView
    case ModuleId.SearchProcess:
      return SearchProcess
    case ModuleId.ExtensionHostTextSearch:
      return ExtensionHostTextSearch
    case ModuleId.ExtensionStateStorage:
      return ExtensionStateStorage
    case ModuleId.GetWindowId:
      return GetWindowId
    case ModuleId.ElectronDialog:
      return ElectronDialog
    case ModuleId.Process:
      return Process
    case ModuleId.ExtensionManagement:
      return ExtensionManagement
    case ModuleId.Markdown:
      return Markdown
    default:
      throw new Error(`module ${moduleId} not found`)
  }
}
