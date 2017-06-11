var SHARED_CONFIG = require('./config/webpack/shared.config.js');
var BROWSER_CONFIG = require('./config/webpack/browser.config.js');
var SERVER_CONFIG = require('./config/webpack/server.config.js');
var _ = require('lodash');

// When we merge objects, we're concatting arrays instead of the normal _.merge logic. Otherwise this breaks nested properties like webpack plugin config
function mergeObj(defaultObj, obj) {
	return _.mergeWith(_.cloneDeep(defaultObj), obj, function customizer(valA, valB) {
		if (_.isArray(valA) && _.isArray(valB)) {
			return valA.concat(valB);
		}
	});
}

module.exports = [
	mergeObj(SHARED_CONFIG, BROWSER_CONFIG),
	mergeObj(SHARED_CONFIG, SERVER_CONFIG)
];
