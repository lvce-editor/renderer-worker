import * as Preferences from '../Preferences/Preferences.js'

export const hasContextMenuNativePreference = () => {
  const value = Preferences.get('window.titleBarStyle')
  return value === 'native'
}
