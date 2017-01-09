var BOTH_CONFIG = require('./config/webpack/both.config.js');
var BROWSER_CONFIG = require('./config/webpack/browser.config.js');
var SERVER_CONFIG = require('./config/webpack/server.config.js');

module.exports = [
	Object.assign({}, BOTH_CONFIG, BROWSER_CONFIG),
	Object.assign({}, BOTH_CONFIG, SERVER_CONFIG)
];
