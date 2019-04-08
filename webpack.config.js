
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ['./js/main.js', "./styles/main.less"],
    context: path.join(__dirname, 'src'),
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use:
                    [{
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './index.html',
            filename: 'index.html'
        })
    ]
};