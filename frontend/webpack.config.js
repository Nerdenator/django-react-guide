// frontend/webpack.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
    // Where Webpack looks to load your Javascript
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    // Where Webpack spits out the results (the myapp static folder)

}
