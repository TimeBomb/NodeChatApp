// TODO: Production webpack config (To shrink size of JS bundle)
var path = require('path');
var webpack = require('webpack');
module.exports = {
	plugins: [
		new webpack.ProvidePlugin({
			_config: path.resolve(__dirname, '../app/browser.js')
		})
	],
	entry: [
		'./src/app/start.jsx'
	],
	output: {
		path: path.resolve(__dirname, '../../static'),
		filename: 'app-bundle.js',
		publicPath: '/static/'
	}
};
