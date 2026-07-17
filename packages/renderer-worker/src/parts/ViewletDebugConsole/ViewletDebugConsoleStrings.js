import * as I18NString from '../I18NString/I18NString.js'

/**
 * @enum {string}
 */
const UiStrings = {
  NoActiveDebugSession: 'No active debug session. Start debugging to evaluate expressions.',
}

export const noActiveDebugSession = () => {
  return I18NString.i18nString(UiStrings.NoActiveDebugSession)
}
