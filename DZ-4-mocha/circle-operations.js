const Math = require('mathjs');

module.exports.circle_square = function (radius) {
	return Math.round(Math.pi * Math.pow(radius, 2));
};

module.exports.circle_perimeter = function (radius) {
	return Math.round(2 * Math.pi * radius);
}