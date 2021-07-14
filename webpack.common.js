const path = require('path')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = mode => {
  const isProduction = mode === 'production'
  return {
    mode: mode,
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    entry: {
      bundle: [
        path.join(__dirname, 'src', 'js', 'packs', 'login.ts'),
        path.join(__dirname, 'src', 'js', 'packs', 'logoutButton.ts')
      ],
      apiDocs: path.join(__dirname, 'src', 'js', 'packs', 'apiDocs.ts'),
      pong: path.join(__dirname, 'src', 'js', 'packs', 'pong.ts'),
    },

    output: {
      path: path.join(__dirname, 'static'),
      filename: `js/[name]${isProduction ? '-[fullhash:5]' : ''}.js`,
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
        {
          test: /\.json$/, loader: 'json-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            !isProduction ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ]
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
      new CssMinimizerPlugin(),
      new MiniCssExtractPlugin(),
      new WebpackManifestPlugin({
        fileName: '../data/manifest.json'
      })
    ]
  }
}
