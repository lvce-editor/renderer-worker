import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const toggleFullScreen = () => {
  return RendererProcess.invoke('Window.toggleFullScreen')
}
