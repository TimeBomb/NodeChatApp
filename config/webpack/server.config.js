var path = require('path');
var fs = require('fs');

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
	target: 'node',
	externals: nodeModules,
	entry: [
		'./src/server/start.js'
	],
	output: {
		path: path.resolve(__dirname, '../../dist'),
		filename: 'app.js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: [/\.scss$/, /\.css$/],
				loader: [
					// Using css-loader/locals instead of ExtractTextPlugin here per webpack developer's comment: https://github.com/webpack/css-loader/issues/59#issuecomment-109793167
					'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	}
};
