const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // configuration
    context: __dirname+'/src',
    entry: {
        'dist/index': './hnpwa.jsx',
        sw: './sw/sw.js'
    },
    output: {
        path: __dirname + '/public/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.jsx', '.js'],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif|wav|html|svg|ttf|woff|eot)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/styles.css')
    ]
};