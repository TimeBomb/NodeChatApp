var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

// Exclude node modules from being compiled by our server-side webpack code
// Source: http://jlongster.com/Backend-Apps-with-Webpack--Part-I
var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	plugins: [
		new webpack.ProvidePlugin({
			_config: path.join(__dirname, '../app/server.js')
		})
	],
	target: 'node',
	externals: nodeModules,
	entry: [
		'./src/server/start.js'
	],
	output: {
		path: path.resolve(__dirname, '../../dist'),
		filename: 'app.js',
		publicPath: '/dist/'
	}
};
