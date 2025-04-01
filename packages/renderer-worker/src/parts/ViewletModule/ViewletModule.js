import { VError } from '../VError/VError.js'
import * as ViewletModuleInternal from '../ViewletModuleInternal/ViewletModuleInternal.js'
import * as IsImportError from '../IsImportError/IsImportError.js'
import * as TryToGetActualImportErrorMessage from '../TryToGetActualImportErrorMessage/TryToGetActualImportErrorMessage.js'

export const load = async (moduleId) => {
  try {
    return await ViewletModuleInternal.load(moduleId)
  } catch (error) {
    const handleImportError = async (error) => {
      if (IsImportError.isImportError(error)) {
        const message = await TryToGetActualImportErrorMessage.tryToGetActualImportErrorMessage(error)
        if (message) {
          return message
        }
      }
      return error.message
    }
    const actualErrorMessage = await handleImportError(error)
    throw new VError(actualErrorMessage, `Failed to load ${moduleId} module`)
  }
}
