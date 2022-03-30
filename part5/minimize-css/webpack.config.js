const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};