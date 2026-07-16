import * as GetOrCreateWorker from '../GetOrCreateWorker/GetOrCreateWorker.js'
import { launchPanelWorker } from '../LaunchPanelWorker/LaunchPanelWorker.js'

const { invoke, restart } = GetOrCreateWorker.getOrCreateWorker(launchPanelWorker)

export { invoke, restart }
