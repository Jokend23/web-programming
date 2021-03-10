const Math = require('mathjs');

module.exports.Circle = class {
	// Класс круга

	constructor(radius) {
		this.radius = radius;
	}

	getSquare() {
		return Math.round(Math.pi * Math.pow(this.radius, 2)); 
	}

	getPerimeter() {
		return Math.round(2 * Math.pi * this.radius);
	} 
}

module.exports.Trapezoid = class {
	// Класс трапеции

	constructor(top, right, bottom, left) {
		this.top = top;
		this.right = right;
		this.bottom = bottom;
		this.left = left;
	}

	getPerimeter() {
		return this.top + this.right + this.bottom + this.left;
	}

	getMiddleLine() {
		return (this.top + this.bottom) / 2;
	}
}

module.exports.Cylinder = class {
	// Класс цилиндра

	constructor(radius, height) {
		this.radius = radius;
		this.height = height;
	}

	getLateralSurfaceArea() {
		return Math.round(2 * Math.pi * this.radius * this.height);
	}

	getFullArea() {
		return Math.round(2 * Math.pi * this.radius * (this.height + this.radius));
	}
}