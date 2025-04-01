import * as QuickPickReturnValue from '../QuickPickReturnValue/QuickPickReturnValue.js'
import * as ViewletQuickPickStrings from '../ViewletQuickPick/ViewletQuickPickStrings.js'

export const name = 'workspace-symbol'

export const getPlaceholder = () => {
  return ''
}

export const getHelpEntries = () => {
  return []
}

export const getNoResults = () => {
  return {
    label: ViewletQuickPickStrings.noWorkspaceSymbolsFound(),
  }
}

export const getPicks = async () => {
  const picks = []
  return picks
}

export const selectPick = async (item) => {
  return {
    command: QuickPickReturnValue.Hide,
  }
}

export const getFilterValue = (value) => {
  return value
}
