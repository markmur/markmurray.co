const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,

  devtool: 'source-map',

  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'bundle.[hash].min.js'
  },

  plugins: [
    new CleanWebpackPlugin(['public'], {
      verbose: false,
      dry: false,
      exclude: ['images', 'fonts', 'favicon.png']
    }),
    new webpack.DefinePlugin({
      __ENV__: process.env.NODE_ENV,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Mark Murray',
      preview: '/src/images/preview.png',
      template: 'layout.ejs',
      output: {
        path: 'public',
        filename: 'index.html'
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff|jpg|png)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
