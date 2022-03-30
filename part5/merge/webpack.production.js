const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
        },
      }),
    ],
  },
});
