const webpack = require('webpack');
const pack = require('./package.json');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      プロジェクト：${pack.name} 
      バージョン：${pack.version}
      作者： ${pack.author}
      ライセンス: ${pack.license}`,
      raw: false,
      entryOnly: true
    })
  ]
};
