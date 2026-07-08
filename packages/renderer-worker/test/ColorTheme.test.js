import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.clearAllMocks()
  for (const key in Preferences.state) {
    delete Preferences.state[key]
  }
  ColorTheme.state.colorTheme = ''
  ColorTheme.state.previewBaseColorTheme = ''
  ColorTheme.state.previewColorTheme = ''
  ColorTheme.state.previewColorThemeJson = ''
  ColorTheme.state.watchedTheme = ''
})

jest.unstable_mockModule('../src/parts/Css/Css.js', () => {
  return {
    addCssStyleSheet: jest.fn(() => {}),
  }
})

jest.unstable_mockModule('../src/parts/GetColorThemeCss/GetColorThemeCss.js', () => {
  return {
    getColorThemeCss: jest.fn((colorThemeId) => {
      if (colorThemeId === 'missing-theme') {
        throw new Error('Color theme "missing-theme" not found')
      }
      if (colorThemeId === 'invalid-json-theme') {
        throw new SyntaxError('Unexpected end of JSON input')
      }
      return `:root { --theme-id: "${colorThemeId}"; }`
    }),
  }
})

const ColorTheme = await import('../src/parts/ColorTheme/ColorTheme.js')
const Css = await import('../src/parts/Css/Css.js')
const GetColorThemeCss = await import('../src/parts/GetColorThemeCss/GetColorThemeCss.js')
const Preferences = await import('../src/parts/Preferences/Preferences.js')

test('previewColorTheme applies preview without changing preference', async () => {
  Preferences.state['workbench.colorTheme'] = 'base-theme'
  ColorTheme.state.colorTheme = 'base-theme'

  await ColorTheme.previewColorTheme('preview-theme')

  expect(ColorTheme.state.colorTheme).toBe('preview-theme')
  expect(ColorTheme.state.previewBaseColorTheme).toBe('base-theme')
  expect(ColorTheme.state.previewColorTheme).toBe('preview-theme')
  expect(Preferences.state['workbench.colorTheme']).toBe('base-theme')
  expect(Css.addCssStyleSheet).toHaveBeenCalledWith('ContributedColorTheme', ':root { --theme-id: "preview-theme"; }')
})

test('disablePreviewColorTheme restores previous color theme', async () => {
  Preferences.state['workbench.colorTheme'] = 'base-theme'
  ColorTheme.state.colorTheme = 'base-theme'
  await ColorTheme.previewColorTheme('preview-theme')

  await ColorTheme.disablePreviewColorTheme()

  expect(ColorTheme.state.colorTheme).toBe('base-theme')
  expect(ColorTheme.state.previewBaseColorTheme).toBe('')
  expect(ColorTheme.state.previewColorTheme).toBe('')
  expect(Css.addCssStyleSheet).toHaveBeenLastCalledWith('ContributedColorTheme', ':root { --theme-id: "base-theme"; }')
})

test('disablePreviewColorTheme does nothing when preview is inactive', async () => {
  await ColorTheme.disablePreviewColorTheme()
  expect(Css.addCssStyleSheet).not.toHaveBeenCalled()
  expect(GetColorThemeCss.getColorThemeCss).not.toHaveBeenCalled()
})

test('previewColorTheme rejects when color theme is not found', async () => {
  ColorTheme.state.colorTheme = 'base-theme'

  await expect(ColorTheme.previewColorTheme('missing-theme')).rejects.toThrow(
    'Failed to apply color theme "missing-theme": Color theme "missing-theme" not found',
  )

  expect(ColorTheme.state.colorTheme).toBe('base-theme')
  expect(Css.addCssStyleSheet).not.toHaveBeenCalled()
})

test('previewColorTheme rejects invalid color theme json', async () => {
  ColorTheme.state.colorTheme = 'base-theme'

  await expect(ColorTheme.previewColorTheme('invalid-json-theme')).rejects.toThrow(
    'Failed to apply color theme "invalid-json-theme": SyntaxError: Unexpected end of JSON input',
  )

  expect(ColorTheme.state.colorTheme).toBe('base-theme')
  expect(Css.addCssStyleSheet).not.toHaveBeenCalled()
})
