// TODO: Production webpack config (To shrink size of JS bundle)
// TODO: DRY up server+browser webpack config by merging shared configs into single file
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
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
			test: /\.html$/,
			loader: 'html-loader'
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({ notExtractLoader: 'style-loader', loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader' })
		},
		{
			test: [/\.js$/, /\.jsx$/],
			loader: 'babel-loader',
			include: [
				path.resolve(__dirname, 'src')
			]
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
