var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
// Exclude node modules from being compiled by our server-side webpack code
var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	target: 'node',
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
			test: /\.js$/,
			loaders: ['babel'],
			include: [path.join(__dirname, 'src/server'), path.join(__dirname, 'src/index.js')]
		}],
		noParse: ['ws', /\.js.map$/]
	},
	externals: ['ws'].concat(nodeModules),
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: '/dist/'
	}
};
