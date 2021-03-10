module.exports.Circle = function (radius) {
	this.radius = radius;
};

module.exports.Trapezoid =function (top, right, bottom, left) {
	this.sides = {
		'top': top,
		'right': right,
		'bottom': bottom,
		'left': left
	}
}

module.exports.Cylinder = function (radius, height) {
	this.radius = radius;
	this.height = height;
}