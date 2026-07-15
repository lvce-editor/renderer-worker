import * as GetOrCreateWorker from '../GetOrCreateWorker/GetOrCreateWorker.js'
import * as LaunchExtensionSearchViewWorker from '../LaunchExtensionSearchViewWorker/LaunchExtensionSearchViewWorker.js'

const { acquire, invoke, invokeAndTransfer, release, restart } = GetOrCreateWorker.getOrCreateWorker(
  LaunchExtensionSearchViewWorker.launchExtensionSearchViewWorker,
  'SearchExtensions.terminate',
)

export { acquire, invoke, invokeAndTransfer, release, restart }
