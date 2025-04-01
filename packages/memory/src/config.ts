import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 1_850_000

export const instantiations = 25_000

export const instantiationsPath = join(root, 'packages', 'renderer-worker')

export const workerPath = join(root, '.tmp/dist/dist/rendererWorkerMain.js')

export const playwrightPath = new URL('../../e2e/node_modules/playwright/index.mjs', import.meta.url).toString()
