// @ts-nocheck
import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.clearAllMocks()
})

jest.unstable_mockModule('../src/parts/Command/Command.js', () => {
  return {
    execute: jest.fn((command, ...args) => {
      if (command === 'QuickPick.showCustom') {
        const resolve = args[1]
        resolve({
          id: 'editor',
        })
      }
    }),
  }
})

jest.unstable_mockModule('../src/parts/GetWebViews/GetWebViews.ts', () => {
  return {
    getWebViews() {
      return [
        {
          id: 'builtin.csv-viewer',
          name: 'CSV Viewer',
          selector: ['.csv'],
        },
      ]
    },
  }
})

const Command = await import('../src/parts/Command/Command.js')
const ViewletMain = await import('../src/parts/ViewletMain/ViewletMain.js')

test('reopenEditorWith - reopens active csv editor as text editor', async () => {
  const state = {
    activeGroupIndex: 0,
    groups: [
      {
        activeIndex: 1,
        editors: [
          {
            uri: '/tmp/one.txt',
          },
          {
            uri: '/tmp/test.csv',
          },
        ],
      },
    ],
  }

  await ViewletMain.reopenEditorWith(state)

  expect(Command.execute).toHaveBeenNthCalledWith(
    1,
    'QuickPick.showCustom',
    [
      {
        id: 'editor',
        label: 'Text Editor',
      },
      {
        id: 'builtin.csv-viewer',
        label: 'CSV Viewer',
      },
    ],
    expect.any(Function),
  )
  expect(Command.execute).toHaveBeenNthCalledWith(2, 'Main.openUri', '/tmp/test.csv', true, {
    opener: 'editor',
  })
})
