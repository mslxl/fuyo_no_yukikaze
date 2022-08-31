const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require("path");

module.exports = {
    mode: "development",
    entry: './src/main.js',
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    "index.html",
                    "public"
                ]
            }
        )
    ],
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: "expose-loader",
                        options: {
                            exposes: '$'
                        }
                    },
                    {
                        loader: "expose-loader",
                        options: {
                            exposes: 'jQuery'
                        }
                    },

                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.(t|j)sx?$/,
                enforce: 'post',
                use: [{loader: path.resolve('./loader/stripStrictLoader.js')}],
            }

        ]
    }
};