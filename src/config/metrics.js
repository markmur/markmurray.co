import GoogleAnalytics from 'config/GoogleAnalytics';

export default {
  vendors: [{
    name: 'Google Analytics',
    api: new GoogleAnalytics({
      trackingId: 'UA-76403737-3'
    })
  }]
}
