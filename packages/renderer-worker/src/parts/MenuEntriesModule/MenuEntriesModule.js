import * as MenuEntriesEditor from '../MenuEntriesEditor/MenuEntriesEditor.js'
import * as MenuEntriesMain from '../MenuEntriesMain/MenuEntriesMain.js'
import * as MenuEntriesTab from '../MenuEntriesTab/MenuEntriesTab.js'
import * as MenuEntriesTitleBar from '../MenuEntriesTitleBar/MenuEntriesTitleBar.js'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.js'

export const load = (id) => {
  switch (id) {
    case MenuEntryId.TitleBar:
      return MenuEntriesTitleBar
    case MenuEntryId.Editor:
      return MenuEntriesEditor
    case MenuEntryId.Tab:
      return MenuEntriesTab
    case MenuEntryId.Main:
      return MenuEntriesMain
    default:
      throw new Error(`Module not found "${id}"`)
  }
}
