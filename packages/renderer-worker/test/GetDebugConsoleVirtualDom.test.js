import { expect, test } from '@jest/globals'
import * as GetDebugConsoleVirtualDom from '../src/parts/GetDebugConsoleVirtualDom/GetDebugConsoleVirtualDom.js'

test('getVirtualDom controls the input value', () => {
  const dom = GetDebugConsoleVirtualDom.getVirtualDom('', '1 + 1')

  expect(dom.at(-1)).toMatchObject({
    value: '1 + 1',
  })
})
