const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    }
}