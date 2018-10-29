const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const PORT = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}).listen(PORT, 'localhost', err => {
  if (err) console.log(err)

  console.log('====================================')
  console.log('         WEBPACK DEV SERVER         ')
  console.log('====================================')
  console.log('Configuration:', 'webpack.config.js')
  console.log('Listening at', `http://localhost:${PORT}`)
  console.log('====================================')
})
