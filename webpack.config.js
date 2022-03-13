const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'


function setupDevTool() {
    if (IS_DEV) return 'eval'
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-react']},
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                "style-loader", 
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                },
                "sass-loader",
                ]
            }
    ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')})
    ],
    devServer: {
        port: 3000,
        open:true,
        hot:IS_DEV,
    },
    devtool: setupDevTool()
}