const Math = require('mathjs');

module.exports.getSquare = function (radius) {
	return Math.round(Math.pi * Math.pow(radius, 2));
};

module.exports.getPerimeter = function (radius) {
	return Math.round(2 * Math.pi * radius);
}