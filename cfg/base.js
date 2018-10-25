'use strict'
const path = require('path')
const defaultSettings = require('./defaults')

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
// const additionalPaths = []

module.exports = {
  // additionalPaths: additionalPaths,
  // port: defaultSettings.port,
  mode: 'development',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'lib/index.js',
    library: 'chat-widget',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      utils: `${defaultSettings.srcPath}/utils/`,
      config:
        `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      vendor: defaultSettings.vendorPath,
      React: __dirname + '/../node_modules/react'
    }
  },
  module: {}
}
