const path = require('path');

module.exports = {
    context : path.resolve(__dirname,'app/client'),
    entry: [
         './js/index.js',
         './scss/style.scss',
    ],

    output: {
        path: path.resolve(__dirname, 'app/dist/assets')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}