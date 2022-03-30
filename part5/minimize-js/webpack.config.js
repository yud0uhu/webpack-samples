const TerserPlugin = require("terser-webpack-plugin");

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
};
