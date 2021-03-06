import Consola from './consola.js'
import BrowserReporter from './reporters/browser.js'

if (!window.consola) {
  // Create new consola instance
  window.consola = new Consola({
    reporters: [
      new BrowserReporter()
    ]
  })
}

export default window.consola
