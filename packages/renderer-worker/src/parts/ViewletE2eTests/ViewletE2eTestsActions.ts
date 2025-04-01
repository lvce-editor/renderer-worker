import type { ViewletAction } from '../ViewletAction/ViewletAction.ts'
import * as ActionType from '../ActionType/ActionType.js'

export const getActions = (): readonly ViewletAction[] => {
  return [
    {
      type: ActionType.Button,
      id: 'runAll',
      icon: 'Play',
      command: 'runAll',
    },
  ]
}
