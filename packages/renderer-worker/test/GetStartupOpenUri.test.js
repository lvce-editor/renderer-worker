import { expect, test } from '@jest/globals'
import * as GetStartupOpenUri from '../src/parts/GetStartupOpenUri/GetStartupOpenUri.js'

test('getStartupOpenUri', () => {
  const result = GetStartupOpenUri.getStartupOpenUri({
    href: 'lvce-oss://app/?openUri=%2Fworkspace%2Ffile.txt',
  })

  expect(result).toBe('/workspace/file.txt')
})

test('getStartupOpenUri - none', () => {
  const result = GetStartupOpenUri.getStartupOpenUri({
    href: 'lvce-oss://app/',
  })

  expect(result).toBe('')
})
