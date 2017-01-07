var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.json$/,
			loader: 'json-loader'
		},
		{
			test: [/\.js$/, /\.jsx$/],
			loader: 'babel',
			include: [
				path.resolve(__dirname, 'src')
			]
		},
		{
			test: /\.html$/,
			loader: 'html-loader'
		}],
		noParse: [/\.js.map$/]
	},
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/browser/start.jsx'
	],
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'app-bundle.js',
		publicPath: '/static/'
	}
};
