import analytics from 'analytics.js'

/**
 * Performs the tracking calls to Google Analytics.
 * Utilizing Segment IO Analytics Integration.
 *
 * @module GoogleAnalytics
 * @class
 * @internal
 */
class GoogleAnalytics {
  constructor(options = {}) {
    this.name = 'Google Analytics'
    this._loaded = false
    this.options = options
  }

  pageView(...args) {
    return this.track(...args)
  }

  user(userId) {
    return new Promise(resolve => {
      this.userId = userId
      resolve({
        userId
      })
    })
  }

  track(eventName, params) {
    return new Promise((resolve, reject) => {
      this._load()
        .then(() => {
          this._track(eventName, params)
          resolve({
            eventName,
            params
          })
        })
        .catch(error => {
          console.error('GA: Failed to initialize', error)
          reject(error)
        })
    })
  }

  _track(eventName, params) {
    if (eventName === 'pageView') {
      analytics.page(params.category, params)
      return
    }
    analytics.track(eventName, params)
  }

  _load() {
    return (
      this._promise ||
      (this._promise = new Promise(resolve => {
        if (this._loaded) {
          resolve()
        } else {
          analytics.once('ready', () => {
            this._loaded = true
            resolve()
          })
          analytics.initialize({
            'Google Analytics': this.options
          })
        }
      }))
    )
  }
}

export default GoogleAnalytics
