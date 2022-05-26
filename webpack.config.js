const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        filename: "main.webpack.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new CleanWebpackPlugin(),
    ]
}