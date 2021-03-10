const Math = require('mathjs');


module.exports.Circle = function (radius) {
	// Класс круга

	this.radius = radius;

	this.getSquare = function (r) {
		return Math.round(Math.pi * Math.pow(r, 2));
	};

	this.getPerimeter = function (r) {
		return Math.round(2 * Math.pi * r);
	};
};

module.exports.Trapezoid =function (top, right, bottom, left) {
	// Класс трапеции

	this.top = top;
	this.right = right;
	this.bottom = bottom;
	this.left = left;

	this.getPerimeter = function (top, right, bottom, left) {
		return top + right + bottom + left;
	};

	this.getMiddleLine = function (top, bottom) {
		return (top + bottom) / 2;
	};
};

module.exports.Cylinder = function (radius, height) {
	// Класс цилиндра

	this.radius = radius;
	this.height = height;

	this.getLateralSurfaceArea = function (r, h) {
		return Math.round(2 * Math.pi * r * h);
	};

	this.getFullArea = function (r, h) {
		return Math.round(2 * Math.pi * r * (h + r));
	};
};