import type { SearchState } from './ViewletSearchTypes.ts'
import * as TextSearchWorker from '../TextSearchWorker/TextSearchWorker.js'

export const clearSearchResults = async (state: SearchState): Promise<SearchState> => {
  await TextSearchWorker.invoke('TextSearch.clearSearchResults', state.uid)
  const commands = await TextSearchWorker.invoke('TextSearch.render', state.uid)
  return {
    ...state,
    commands,
  }
}
