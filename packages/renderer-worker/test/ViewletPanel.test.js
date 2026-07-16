import { beforeEach, expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/PanelWorker/PanelWorker.js', () => ({
  invoke: jest.fn(),
  restart: jest.fn(),
}))

const PanelWorker = await import('../src/parts/PanelWorker/PanelWorker.js')
const ViewletPanel = await import('../src/parts/ViewletPanel/ViewletPanel.js')

beforeEach(() => {
  jest.resetAllMocks()
})

test('create', () => {
  expect(ViewletPanel.create(1, '', 2, 3, 400, 200)).toEqual({
    commands: [],
    filteredItems: [],
    focused: false,
    focusedIndex: -1,
    height: 200,
    panelItems: [],
    selectedIndex: -1,
    uid: 1,
    width: 400,
    x: 2,
    y: 3,
  })
})

test('loadContent delegates panel state and rendering to panel worker', async () => {
  // @ts-ignore
  PanelWorker.invoke.mockImplementation(async (command) => {
    if (command === 'Panel.diff2') {
      return [1]
    }
    if (command === 'Panel.render2') {
      return [['Viewlet.setDom2', [{ type: 'Div', childCount: 0 }]]]
    }
    return undefined
  })
  const state = ViewletPanel.create(1, '', 2, 3, 400, 200)

  const result = await ViewletPanel.loadContent(state)

  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(1, 'Panel.create', 1, '', 2, 3, 400, 200, expect.any(Number), '')
  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(2, 'Panel.loadContent', 1, {})
  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(3, 'Panel.diff2', 1)
  expect(PanelWorker.invoke).toHaveBeenNthCalledWith(4, 'Panel.render2', 1, [1])
  expect(result.commands).toEqual([['Viewlet.setDom2', [{ type: 'Div', childCount: 0 }]]])
})
