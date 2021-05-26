const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    performance: {
        maxEntrypointSize: 400000,
    }
})
