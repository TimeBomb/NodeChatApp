var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: './app.css',
			allChunks: true
		})
	],
	module: {
		rules: [{
			test: /\.json$/,
			loader: 'json-loader'
		},
		{
			test: [/\.js$/, /\.jsx$/],
			loader: 'babel-loader',
			include: [
				path.resolve(__dirname, 'src')
			]
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({ notExtractLoader: 'style-loader', loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader' })
		},
		{
			test: /\.html$/,
			loader: 'html-loader'
		}],
		noParse: [/\.js.map$/]
	},
	externals: ['ws'].concat(nodeModules),
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/server/start.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: '/dist/'
	}
};
