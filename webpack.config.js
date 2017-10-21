const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // configuration
    context: __dirname+'/src',
    entry: './hnpwa.jsx',
    output: {
        path: __dirname + '/public/dist',
        filename: 'index.js'
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
        new ExtractTextPlugin('styles.css')
    ]
};