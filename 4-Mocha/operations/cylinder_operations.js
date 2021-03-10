const Math = require('mathjs');

module.exports.getLateralSurfaceArea = function (r, h) {
	return Math.round(2 * Math.pi * r * h);
}

module.exports.getFullArea = function (r, h) {
	return Math.round(2 * Math.pi * r * (h + r));
}