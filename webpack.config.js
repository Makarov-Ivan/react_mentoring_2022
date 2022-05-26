const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        filename: "main.webpack.js",
        path: path.resolve(__dirname, "dist")
    }
}