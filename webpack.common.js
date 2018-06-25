const fs = require('fs')
const path = require('path')

const { NODE_ENV } = process.env

const devtool = {
  development: 'cheap-module-source-map',
  production: 'source-map'
}[NODE_ENV]

const getDirectories = filePath => {
  return fs.readdirSync(filePath).filter(file => {
    return fs.statSync(`${filePath}/${file}`).isDirectory()
  })
}

const packages = getDirectories(path.resolve('src'))

const aliases = packages.reduce((state, name) => {
  state[name] = `src/${name}`
  return state
}, {})

const loaders = {
  css: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },

  file: {
    test: /\.(ttf|eot|svg|woff|jpg|png)(\?[a-z0-9]+)?$/,
    use: 'file-loader?name=[path][name].[ext]'
  },

  js: {
    test: /\.js$/,
    use: 'babel-loader'
  }
}

module.exports = {
  devtool,
  loaders,
  aliases
}
