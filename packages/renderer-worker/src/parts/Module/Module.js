import * as ModuleId from '../ModuleId/ModuleId.js'
import * as About from '../About/About.ipc.js'
import * as Ajax from '../Ajax/Ajax.ipc.js'
import * as Audio from '../Audio/Audio.ipc.js'
import * as AutoUpdater from '../AutoUpdater/AutoUpdater.ipc.js'
import * as GetEditorSourceActions from '../GetEditorSourceActions/GetEditorSourceActions.ipc.js'
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
import * as ElectronWindow from '../ElectronWindow/ElectronWindow.ipc.js'
import * as ErrorHandling from '../ErrorHandling/ErrorHandling.ipc.js'
import * as Exit from '../Exit/Exit.ipc.js'
import * as ExtensionHostCore from '../ExtensionHost/ExtensionHostCore.ipc.js'
import * as ExtensionMeta from '../ExtensionMeta/ExtensionMeta.ipc.js'
import * as Extensions from '../Extensions/Extensions.ipc.js'
import * as FilePicker from '../FilePicker/FilePicker.ipc.js'
import * as FileSystem from '../FileSystem/FileSystem.ipc.js'
import * as IconTheme from '../IconTheme/IconTheme.ipc.js'
import * as ImagePreview from '../ImagePreview/ImagePreview.ipc.js'
import * as Focus from '../Focus/Focus.ipc.js'
import * as IncrementalTextSearch from '../IncrementalTextSearch/IncrementalTextSearch.ipc.js'
import * as IndexedDb from '../IndexedDb/IndexedDb.ipc.js'
import * as IpcParent from '../IpcParent/IpcParent.ipc.js'

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
      return import('../KeyBindings/KeyBindings.ipc.js')
    case ModuleId.KeyBindingsInitial:
      return import('../KeyBindingsInitial/KeyBindingsInitial.ipc.js')
    case ModuleId.Listener:
      return import('../Listener/Listener.ipc.js')
    case ModuleId.LocalStorage:
      return import('../LocalStorage/LocalStorage.ipc.js')
    case ModuleId.Menu:
      return import('../Menu/Menu.ipc.js')
    case ModuleId.Mime:
      return import('../Mime/Mime.ipc.js')
    case ModuleId.NativeHost:
      return import('../NativeHost/NativeHost.ipc.js')
    case ModuleId.Navigation:
      return import('../Navigation/Navigation.ipc.js')
    case ModuleId.Notification:
      return import('../Notification/Notification.ipc.js')
    case ModuleId.Open:
      return import('../Open/Open.ipc.js')
    case ModuleId.OpenNativeFolder:
      return import('../OpenNativeFolder/OpenNativeFolder.ipc.js')
    case ModuleId.PersistentFileHandle:
      return import('../PersistentFileHandle/PersistentFileHandle.ipc.js')
    case ModuleId.Preferences:
      return import('../Preferences/Preferences.ipc.js')
    case ModuleId.Prompt:
      return import('../Prompt/Prompt.ipc.js')
    case ModuleId.RebuildNodePty:
      return import('../RebuildNodePty/RebuildNodePty.ipc.js')
    case ModuleId.RecentlyOpened:
      return import('../RecentlyOpened/RecentlyOpened.ipc.js')
    case ModuleId.Reload:
      return import('../Reload/Reload.ipc.js')
    case ModuleId.SaveFileAs:
      return import('../SaveFileAs/SaveFileAs.ipc.js')
    case ModuleId.SaveState:
      return import('../SaveState/SaveState.ipc.js')
    case ModuleId.SessionReplay:
      return import('../SessionReplay/SessionReplay.ipc.js')
    case ModuleId.SessionStorage:
      return import('../SessionStorage/SessionStorage.ipc.js')
    case ModuleId.Test:
      return import('../Test/Test.ipc.js')
    case ModuleId.TestFrameWork:
      return import('../TestFrameWork/TestFrameWork.ipc.js')
    case ModuleId.Url:
      return import('../Url/Url.ipc.js')
    case ModuleId.Viewlet:
      return import('../Viewlet/Viewlet.ipc.js')
    case ModuleId.Window:
      return import('../Window/Window.ipc.js')
    case ModuleId.Workspace:
      return import('../Workspace/Workspace.ipc.js')
    case ModuleId.WindowTitle:
      return import('../WindowTitle/WindowTitle.ipc.js')
    case ModuleId.PointerCapture:
      return import('../PointerCapture/PointerCapture.ipc.js')
    case ModuleId.QuickPick:
      return import('../QuickPick/QuickPick.ipc.js')
    case ModuleId.ExtensionHostQuickPick:
      return import('../ExtensionHost/ExtensionHostQuickPick.ipc.js')
    case ModuleId.ExtensionHostDialog:
      return import('../ExtensionHost/ExtensionHostDialog.ipc.js')
    case ModuleId.ExtensionHostWorkerContentSecurityPolicy:
      return import('../ExtensionHost/ExtensionHostWorkerContentSecurityPolicy.ipc.js')
    case ModuleId.SendMessagePortToElectron:
      return import('../SendMessagePortToElectron/SendMessagePortToElectron.ipc.js')
    case ModuleId.OffscreenCanvas:
      return import('../OffscreenCanvas/OffscreenCanvas.ipc.js')
    case ModuleId.Languages:
      return import('../Languages/Languages.ipc.js')
    case ModuleId.FileWatcher:
      return import('../FileWatcher/FileWatcher.ipc.js')
    case ModuleId.ExtensionHostSelection:
      return import('../ExtensionHost/ExtensionHostSelection.ipc.js')
    case ModuleId.ExtensionHostBraceCompletion:
      return import('../ExtensionHost/ExtensionHostBraceCompletion.ipc.js')
    case ModuleId.ExtensionHostDefinition:
      return import('../ExtensionHost/ExtensionHostDefinition.ipc.js')
    case ModuleId.ExtensionHostTypeDefinition:
      return import('../ExtensionHost/ExtensionHostTypeDefinition.ipc.js')
    case ModuleId.ExtensionHostOrganizeImports:
      return import('../ExtensionHost/ExtensionHostOrganizeImports.ipc.js')
    case ModuleId.ExtensionHostTabCompletion:
      return import('../ExtensionHost/ExtensionHostTabCompletion.ipc.js')
    case ModuleId.ExtensionHostClosingTag:
      return import('../ExtensionHost/ExtensionHostClosingTagCompletion.ipc.js')
    case ModuleId.SendMessagePortToRendererProcess:
      return import('../SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ipc.js')
    case ModuleId.ExtensionHostHover:
      return import('../ExtensionHost/ExtensionHostHover.ipc.js')
    case ModuleId.SendMessagePortToExtensionHostWorker:
      return import('../SendMessagePortToExtensionHostWorker/SendMessagePortToExtensionHostWorker.ipc.js')
    case ModuleId.ExtensionHostManagement:
      return import('../ExtensionHostManagement/ExtensionHostManagement.ipc.js')
    case ModuleId.SendMessagePortToSyntaxHighlightingWorker:
      // TODO move this to transferrable module instead
      return import('../SendMessagePortToSyntaxHighlightingworker/SendMessagePortToSyntaxHighlightingWorker.ipc.js')
    case ModuleId.Transferrable:
      return import('../Transferrable/Transferrable.ipc.js')
    case ModuleId.WebView:
      return import('../WebView/WebView.ipc.ts')
    case ModuleId.SearchProcess:
      return import('../SearchProcess/SearchProcess.ipc.js')
    case ModuleId.ExtensionHostTextSearch:
      return import('../ExtensionHost/ExtensionHostTextSearch.ipc.js')
    case ModuleId.ExtensionStateStorage:
      return import('../ExtensionStateStorage/ExtensionStateStorage.js')
    case ModuleId.GetWindowId:
      return import('../GetWindowId/GetWindowId.ipc.js')
    case ModuleId.ElectronDialog:
      return import('../ElectronDialog/ElectronDialog.ipc.js')
    case ModuleId.Process:
      return import('../Process/Process.ipc.js')
    case ModuleId.ExtensionManagement:
      return import('../ExtensionManagement/ExtensionManagement.ipc.js')
    case ModuleId.Markdown:
      return import('../Markdown/Markdown.ipc.js')
    default:
      throw new Error(`module ${moduleId} not found`)
  }
}
