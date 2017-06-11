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
	resolve: {
		modules: [path.join(__dirname, '../..'), 'node_modules']
	},
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
				test: [/\.scss$/, /\.css$/],
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize',
						'postcss-loader',
						'sass-loader'
					]
				})
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
