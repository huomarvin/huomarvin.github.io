const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            //     { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
        hotOnly: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ]
};