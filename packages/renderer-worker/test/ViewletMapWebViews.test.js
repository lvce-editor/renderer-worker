// @ts-nocheck
import { expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/GetWebViews/GetWebViews.ts', () => {
  return {
    getWebViews() {
      return [
        {
          id: 'builtin.csv-viewer',
          selector: ['.csv'],
        },
      ]
    },
  }
})

const ViewletMap = await import('../src/parts/ViewletMap/ViewletMap.js')
const ViewletModuleId = await import('../src/parts/ViewletModuleId/ViewletModuleId.js')

test('csv - default opener uses webview', async () => {
  expect(await ViewletMap.getModuleId('/test/file.csv')).toBe(ViewletModuleId.WebView)
})

test('csv - editor opener uses text editor', async () => {
  expect(await ViewletMap.getModuleId('/test/file.csv', 'editor')).toBe(ViewletModuleId.EditorText)
})

