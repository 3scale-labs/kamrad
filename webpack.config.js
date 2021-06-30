const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: "inline-source-map",
  entry: './src/js/spotlightElements.ts',
  output: {
    filename: 'spotlightElements.js',
    path: path.resolve('static', 'assets')
  },
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "querystring": require.resolve("querystring-es3"),
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/'
    })
  ]
}
