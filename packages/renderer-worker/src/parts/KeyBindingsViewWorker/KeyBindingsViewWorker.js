import * as GetOrCreateWorker from '../GetOrCreateWorker/GetOrCreateWorker.js'
import * as LaunchKeyBindingsViewWorker from '../LaunchKeyBindingsViewWorker/LaunchKeyBindingsViewWorker.js'

const { acquire, invoke, invokeAndTransfer, release, restart } = GetOrCreateWorker.getOrCreateWorker(
  LaunchKeyBindingsViewWorker.launchKeyBindingsViewWorker,
  'KeyBindings.terminate',
)

export { acquire, invoke, invokeAndTransfer, release, restart }
