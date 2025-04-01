import * as FileSystemProtocol from '../FileSystemProtocol/FileSystemProtocol.js'
import * as ExtensionHostFileSystem from '../ExtensionHost/ExtensionHostFileSystem.js'
import * as FileSystemApp from '../FileSystem/FileSystemApp.js'
import * as FileSystemData from '../FileSystem/FileSystemData.js'
import * as FileSystemMemory from '../FileSystem/FileSystemMemory.js'
import * as FileSystemWeb from '../FileSystem/FileSystemWeb.js'
import * as FileSystemFetch from '../FileSystem/FileSystemFetch.js'
import * as FileSystemDisk from '../FileSystem/FileSystemDisk.js'
import * as FileSystemHtml from '../FileSystem/FileSystemHtml.js'

export const map = {
  [FileSystemProtocol.ExtensionHost]: () => ExtensionHostFileSystem,
  [FileSystemProtocol.App]: () => FileSystemApp,
  [FileSystemProtocol.Data]: () => FileSystemData,
  [FileSystemProtocol.Memfs]: () => FileSystemMemory,
  [FileSystemProtocol.Web]: () => FileSystemWeb,
  [FileSystemProtocol.Fetch]: () => FileSystemFetch,
  [FileSystemProtocol.Disk]: () => FileSystemDisk,
  [FileSystemProtocol.Html]: () => FileSystemHtml,
}
