const path = require('path')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = mode => {
  const isProduction = mode === 'production'
  return {
    mode: mode,
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    entry: {
      app: path.join(__dirname, 'src', 'js', 'index.ts')
    },

    output: {
      path: path.join(__dirname, 'static'),
      filename: `js/[name]${isProduction ? '-[hash:5]' : ''}.bundle.js`,
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
              }
            }
          ]
        },
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
          use: ['file-loader?name=/[hash].[ext]']
        },
        {test: /\.json$/, loader: 'json-loader'},
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: ['style-loader', MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, './tsconfig.json')
        })
      ],
      symlinks: false,
      cacheWithContext: false
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: `css/${isProduction ? '[hash].' : ''}.css`,
        chunkFilename: `css/${isProduction ? '[id].' : ''}.css`
      }),
      new WebpackManifestPlugin({
        fileName: '../data/manifest.json'
      })
    ]
  }
}
