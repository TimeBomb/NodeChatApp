var merge = require('deepmerge');

var BOTH_CONFIG = require('./config/webpack/both.config.js');
var BROWSER_CONFIG = require('./config/webpack/browser.config.js');
var SERVER_CONFIG = require('./config/webpack/server.config.js');

module.exports = [
	merge(BOTH_CONFIG, BROWSER_CONFIG),
	merge(BOTH_CONFIG, SERVER_CONFIG)
];
