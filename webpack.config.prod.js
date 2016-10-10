const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  // Capture timing information for each module
  profile: false,

  // Switch loaders to debug mode
  debug: false,

  // Report the first error as a hard error instead of tolerating it
  bail: true,

  entry: [
    'babel-polyfill',
    './src/main.js',
  ],

  output: {
    path: 'public/',
    pathInfo: true,
    publicPath: '/',
    filename: 'bundle.[hash].min.js',
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'src/',
      'src/components',
      'src/styles'
    ],
    extensions: ['', '.js', '.jsx'],
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },

  plugins: [
    new CleanWebpackPlugin(['public'], {
      verbose: false,
      dry: false,
      exclude: ['images', 'fonts', 'favicon.png']
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new webpack.DefinePlugin({
      __ENV__: NODE_ENV,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Mark Murray',
      template: 'layout.ejs',
      output: {
        path: 'public',
        filename: 'index.html'
      },
    })
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/, // sass files
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded',
      },
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.(ttf|eot|svg|woff|jpg|png)(\?[a-z0-9]+)?$/, // font files
        loader: 'file-loader?name=[path][name].[ext]',
      },
      {
        test: /\.json$/, // font files
        loader: 'json',
      },
      {
        test: /\.(js|jsx)?$/, // react files
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: ['babel?' + JSON.stringify({
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        })],
      }
    ],

    noParse: /\.min\.js/,
  },
};
