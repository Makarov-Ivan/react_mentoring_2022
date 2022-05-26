const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.join(process.cwd(), "src", "index.js"),
    output: {
        filename: "main.webpack.[hash].js",
        path: path.resolve(process.cwd(), "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: { presets: ['@babel/env', '@babel/preset-react'] },
        }]
    }
}