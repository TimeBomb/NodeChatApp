var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: '../static/app.css',
			allChunks: true
		})
	],
	module: {
		noParse: [/\.js.map$/],
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: [/\.js$/, /\.jsx$/],
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, '../../src')
				]
			}
		]
	},
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client'
	]
};
