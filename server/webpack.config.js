/**
 * Created by hangvirus on 23/10/16.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: "source-map",
    entry: [
        './src/web/index'
    ],
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
            {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
        ]
    },
    output: {
        path: path.join(__dirname, './src/web/dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './src/web/dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};