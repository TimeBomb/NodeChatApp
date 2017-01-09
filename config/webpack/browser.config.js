var ExtractTextPlugin = require('extract-text-webpack-plugin');
// TODO: Production webpack config (To shrink size of JS bundle)
var path = require('path');
module.exports = {
	entry: [
		'./src/browser/start.jsx'
	],
	output: {
		path: path.resolve(__dirname, '../../static'),
		filename: 'app-bundle.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: [/\.scss$/, /\.css$/],
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize',
						'postcss-loader',
						'sass-loader'
					]
				})
			}
		]
	}
};
