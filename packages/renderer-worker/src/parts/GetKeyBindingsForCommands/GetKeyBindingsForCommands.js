import * as GetCommandKeyBinding from '../GetCommandKeyBinding/GetCommandKeyBinding.js'
import * as ViewletLayoutKeyBindings from '../ViewletLayout/ViewletLayoutKeyBindings.js'

export const getKeyBindingsForCommands = (_state, entries) => {
  const keyBindings = ViewletLayoutKeyBindings.getKeyBindings()
  return entries.map((entry) => {
    const keyBinding = GetCommandKeyBinding.getCommandKeyBinding(keyBindings, entry.command, entry.args)
    return keyBinding ? keyBinding.key : 0
  })
}

getKeyBindingsForCommands.returnValue = true
