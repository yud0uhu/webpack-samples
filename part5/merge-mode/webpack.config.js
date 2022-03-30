const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, args) => {
  let isdev = args.mode === 'development';
  return {
    entry: './src/index.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.js'
    },
    devServer: {
      contentBase: './dist'
    },  
    devtool: isdev ? 'eval-source-map' : 'source-map',
    optimization: {
      minimize: true,
      minimizer: isdev ?
        [] :
        [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            },
          }),
        ]
    },
  }
};