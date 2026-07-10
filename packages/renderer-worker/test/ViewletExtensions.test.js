import { expect, test } from '@jest/globals'
import * as ViewletExtensions from '../src/parts/ViewletExtensions/ViewletExtensions.js'

test('create stores the parent uid', () => {
  const state = ViewletExtensions.create(1, '', 0, 0, 100, 100, [], 42)
  expect(state.parentUid).toBe(42)
})
