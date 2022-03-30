module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'eval',
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000
  }
};