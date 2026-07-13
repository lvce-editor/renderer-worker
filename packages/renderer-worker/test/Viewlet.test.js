import { beforeEach, expect, jest, test } from '@jest/globals'
import * as ViewletStates from '../src/parts/ViewletStates/ViewletStates.js'

beforeEach(() => {
  jest.resetAllMocks()
  ViewletStates.reset()
  ViewletStates.set(1, {
    state: { uid: 1 },
    renderedState: {
      uid: 1,
    },
    moduleId: 'Layout',
    factory: {},
  })
})

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.js', () => {
  return {
    invoke: jest.fn(() => {
      throw new Error('not implemented')
    }),
  }
})
jest.unstable_mockModule('../src/parts/ViewletManager/ViewletManager.js', () => {
  return {
    load: jest.fn(() => {
      throw new Error('not implemented')
    }),
  }
})
jest.unstable_mockModule('../src/parts/Id/Id.js', () => {
  return {
    create() {
      return 2
    },
  }
})

const ViewletManager = await import('../src/parts/ViewletManager/ViewletManager.js')
const RendererProcess = await import('../src/parts/RendererProcess/RendererProcess.js')
const Viewlet = await import('../src/parts/Viewlet/Viewlet.js')

test.skip('focus', () => {
  // RendererProcess.state.send = jest.fn()
  // Viewlet.focus('Noop')
  // expect(RendererProcess.state.send).toHaveBeenCalledWith([3027, 'Noop'])
})

test.skip('setState - shouldApplyNewState returns false', () => {
  // Viewlet.state.instances['test'] = {
  //   factory: {
  //     hasFunctionalRender: true,
  //     render() {
  //       return []
  //     },
  //   },
  //   state: {},
  // }
})

test('resize - missing resize function', async () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})
  ViewletStates.set(2, {
    state: { uid: 2 },
    renderedState: { uid: 2 },
    moduleId: 'ProcessExplorer',
    factory: { name: 'Process Explorer' },
  })

  const result = await Viewlet.resize(2, {})

  expect(result).toEqual([])
  expect(spy).toHaveBeenCalledWith('The "Process Explorer" component is missing a resize function')
  spy.mockRestore()
})

test('resize - missing resize function falls back to module id', async () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  const result = await Viewlet.resize(1, {})

  expect(result).toEqual([])
  expect(spy).toHaveBeenCalledWith('The "Layout" component is missing a resize function')
  spy.mockRestore()
})

test('resize - missing instance', async () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  const result = await Viewlet.resize(2, {})

  expect(result).toEqual([])
  expect(spy).toHaveBeenCalledWith('Cannot resize component instance 2: instance not found')
  spy.mockRestore()
})

test('dispose - waits for factory disposal before disposing the rendered viewlet', async () => {
  let resolveDispose = () => {}
  const disposePromise = new Promise((resolve) => {
    resolveDispose = () => resolve(undefined)
  })
  const factoryDispose = jest.fn((_state) => disposePromise)
  ViewletStates.set(2, {
    state: { uid: 2 },
    renderedState: { uid: 2 },
    moduleId: 'SimpleBrowser',
    factory: { dispose: factoryDispose },
  })
  // @ts-ignore
  RendererProcess.invoke.mockImplementation(() => {})

  let didDispose = false
  const viewletDisposePromise = Viewlet.dispose(2).then(() => {
    didDispose = true
  })

  await Promise.resolve()
  expect(factoryDispose).toHaveBeenCalledWith({ uid: 2 })
  expect(RendererProcess.invoke).not.toHaveBeenCalled()
  expect(didDispose).toBe(false)

  resolveDispose()
  await viewletDisposePromise

  expect(RendererProcess.invoke).toHaveBeenCalledWith('Viewlet.dispose', 2)
  expect(didDispose).toBe(true)
})

test('openWidget - once', async () => {
  // @ts-ignore
  ViewletManager.load.mockImplementation(() => {
    return []
  })
  await Viewlet.openWidget('QuickPick', ['everything'])
  expect(ViewletManager.load).toHaveBeenCalledTimes(1)
  expect(ViewletManager.load).toHaveBeenCalledWith({
    // @ts-ignore
    focus: true,
    getModule: expect.anything(),
    id: 'QuickPick',
    show: false,
    type: 0,
    uid: 2,
    uri: 'quickPick://everything',
    args: [['everything']],
  })
})

test('openWidget - should not open again when already open', async () => {
  // @ts-ignore
  ViewletManager.load.mockImplementation(({ id }) => {
    ViewletStates.set(id, { factory: {}, state: {}, renderedState: {} })
    return []
  })
  // @ts-ignore
  RendererProcess.invoke.mockImplementation(() => {})
  await Viewlet.openWidget('QuickPick', ['everything'])
  await Viewlet.openWidget('QuickPick', ['file'])
  expect(ViewletManager.load).toHaveBeenCalledTimes(2)
  expect(ViewletManager.load).toHaveBeenNthCalledWith(1, {
    // @ts-ignore
    focus: true,
    getModule: expect.anything(),
    id: 'QuickPick',
    show: false,
    type: 0,
    uid: 2,
    uri: 'quickPick://everything',
    args: [['everything']],
  })
  expect(ViewletManager.load).toHaveBeenNthCalledWith(2, {
    // @ts-ignore
    focus: true,
    getModule: expect.anything(),
    id: 'QuickPick',
    show: false,
    type: 0,
    uid: 2,
    uri: 'quickPick://file',
    args: [['file']],
  })
  expect(RendererProcess.invoke).toHaveBeenCalledTimes(2)
  expect(RendererProcess.invoke).toHaveBeenNthCalledWith(1, 'Viewlet.executeCommands', [
    ['Viewlet.append', 1, 2],
    ['Viewlet.focus', 2],
  ])
  expect(RendererProcess.invoke).toHaveBeenNthCalledWith(2, 'Viewlet.executeCommands', [
    ['Viewlet.dispose', 'QuickPick'],
    ['Viewlet.append', 1, 2],
    ['Viewlet.focus', 2],
  ])
})
