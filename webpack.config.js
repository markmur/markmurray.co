const path = require('path')
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const HTML = require('html-webpack-plugin')
const { devtool, loaders, aliases } = require('./webpack.common.js')

const { NODE_ENV } = process.env

const htmlPlugin = new HTML({
  title: 'Mark Murray',
  preview: '/src/images/preview.png',
  template: 'layout.ejs',
  output: {
    path: 'public',
    filename: 'index.html'
  }
})

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const cleanPlugin = new Clean(['public'], {
  verbose: false,
  dry: false,
  exclude: ['images', 'fonts', 'favicon.png']
})

module.exports = {
  mode: NODE_ENV,
  devtool,
  entry: ['babel-polyfill', './src/index.js'],

  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: '[hash].min.js',
    chunkFilename: '[chunkhash]'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: aliases
  },

  plugins: [cleanPlugin, definePlugin, htmlPlugin],

  module: {
    rules: [loaders.js, loaders.file, loaders.css]
  }
}
