import * as Process from './Process.js'

export const name = 'Process'

export const Commands = {
  getArgv: Process.getArgv,
  getNodeVersion: Process.getNodeVersion,
  getElectronVersion: Process.getElectronVersion,
  getChromeVersion: Process.getChromeVersion,
  getV8Version: Process.getV8Version,
  writeStderr: Process.writeStderr,
  writeStdout: Process.writeStdout,
}
