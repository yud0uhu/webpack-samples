const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

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
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/images',
                    to: 'images'
                },
            ],
        }),
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/i,
            pngquant: {
                quality: '70-80'
            },
            gifsicle: {
                optimizationLevel: 1,
                colors: 256
            },
            svgo: {
            },
            plugins: [
                ImageminMozjpeg({
                    quality: 80,
                    progressive: false
                })
            ]
        })
    ]
};
