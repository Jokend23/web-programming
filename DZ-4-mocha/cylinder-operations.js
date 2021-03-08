const Math = require('mathjs');

module.exports.lateralSurfaceArea = function (r, h) {
	return Math.round(2 * Math.pi * r * h);
}

module.exports.fullArea = function (r, h) {
	return Math.round(2 * Math.pi * r * (h + r));
}