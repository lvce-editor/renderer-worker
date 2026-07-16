import { beforeEach, expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/PanelWorker/PanelWorker.js', () => ({
  invoke: jest.fn(),
  restart: jest.fn(),
}))

jest.unstable_mockModule('../src/parts/ViewletManager/ViewletManager.js', () => ({
  load: jest.fn(),
  state: {
    pendingModules: Object.create(null),
  },
}))

const ViewletLayout = await import('../src/parts/ViewletLayout/ViewletLayout.js')
const ViewletLayoutCommands = await import('../src/parts/ViewletLayout/ViewletLayoutCommands.js')
const ViewletManager = await import('../src/parts/ViewletManager/ViewletManager.js')
const PanelWorker = await import('../src/parts/PanelWorker/PanelWorker.js')
const LayoutKeys = await import('../src/parts/LayoutKeys/LayoutKeys.js')
const ViewletStates = await import('../src/parts/ViewletStates/ViewletStates.js')

beforeEach(() => {
  jest.resetAllMocks()
  ViewletStates.reset()
})

test('registers panel child viewlet bridge commands on Layout', () => {
  expect(ViewletLayoutCommands.CommandsWithSideEffects.createViewlet).toBe(ViewletLayout.createViewlet)
  expect(ViewletLayoutCommands.CommandsWithSideEffects.createPanelViewlet).toBe(ViewletLayout.createPanelViewlet)
})

test('createPanelViewlet creates a linked actions root for child-contributed actions', async () => {
  const state = ViewletLayout.create(1)
  const events = [{ name: 'handleClickAction', params: ['run'] }]
  const actionsDom = [{ type: 'Button', childCount: 0 }]
  // @ts-ignore
  ViewletManager.load.mockResolvedValue([
    ['Viewlet.create', 'Output', 11],
    ['Viewlet.registerEventListeners', 11, events],
    ['Viewlet.send', -1, 'setActionsDom', actionsDom, 11],
  ])

  const result = await ViewletLayout.createPanelViewlet(
    state,
    'Output',
    11,
    22,
    33,
    {
      x: 0,
      y: 35,
      width: 400,
      height: 200,
    },
    '',
  )

  const expectedLoadOptions = {
    append: false,
    args: [],
    focus: false,
    getModule: expect.any(Function),
    height: 200,
    id: 'Output',
    parentUid: -1,
    setBounds: false,
    show: false,
    type: 0,
    uid: 11,
    uri: '',
    width: 400,
    x: 0,
    y: 35,
  }
  // @ts-ignore
  expect(ViewletManager.load).toHaveBeenCalledWith(expectedLoadOptions, false, true)
  expect(result).toEqual({
    newState: state,
    commands: [
      ['Viewlet.create', 'Output', 11],
      ['Viewlet.registerEventListeners', 11, events],
      ['Viewlet.createFunctionalRoot', 'Output', 33, true],
      ['Viewlet.registerEventListeners', 33, events],
      ['Viewlet.setDom2', 33, actionsDom],
      ['Viewlet.setUid', 33, 11],
    ],
  })
})

test('showPanel switches the visible panel view through panel worker', async () => {
  const state = ViewletLayout.create(1)
  state.points[LayoutKeys.PanelVisible] = 1
  ViewletStates.set('Panel', {
    factory: {},
    renderedState: {},
    state: {
      uid: 7,
    },
  })
  // @ts-ignore
  PanelWorker.invoke.mockImplementation(async (command) => {
    if (command === 'Panel.diff2') {
      return [1]
    }
    if (command === 'Panel.render2') {
      return [['Viewlet.setDom2', 7, [{ type: 'Div', childCount: 0 }]]]
    }
    return undefined
  })

  const result = await ViewletLayout.showPanel(state, 'Terminals')

  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(1, 'Panel.toggleView', 7, 'Terminals')
  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(2, 'Panel.diff2', 7)
  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(3, 'Panel.render2', 7, [1])
  expect(result).toEqual({
    newState: state,
    commands: [['Viewlet.setDom2', 7, [{ type: 'Div', childCount: 0 }]]],
  })
})
