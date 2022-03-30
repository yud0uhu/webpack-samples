const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  devtool: 'eval-source-map'
});
