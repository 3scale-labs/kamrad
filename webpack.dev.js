const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common('development'), {

  devServer: {
    port: 1314,
    watchContentBase: true,
    quiet: true,
    open: false
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'static/**/*.js',
        'static/**/*.css'
      ]})
  ]
})
