import * as Command from '../Command/Command.js'
import * as Preferences from '../Preferences/Preferences.js'

export const initialize = () => {
  Command.register('Layout.getBackendUrl', () => Preferences.get('layout.backendUrl') || '')
}
