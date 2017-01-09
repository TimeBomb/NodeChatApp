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
	}
};
