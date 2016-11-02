

module.exports = {
    entry: './client/index.js',

    output: {
        path: './client/static',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    }
}