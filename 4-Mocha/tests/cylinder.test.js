const assert = require('assert');
// const operations = require('../operations/cylinder_operations.js');


module.exports.lateralSurfaceArea = function (cylinderObj, exceptedResult) {
	let radius = cylinderObj.radius;
	let height = cylinderObj.height;

	describe('Формулы цилиндра', function () {
		describe('Площадь боковой поверности', function () {
			it(`Должно вернуть ${exceptedResult}, радиус = ${radius}, высота = ${height}`, function () {
				let result = cylinderObj.getLateralSurfaceArea();

				assert.equal(result, exceptedResult);
			})
		});
	});
};

module.exports.fullArea = function (cylinderObj, exceptedResult) {
	let radius = cylinderObj.radius;
	let height = cylinderObj.height;

	describe('Формулы цилиндра', function () {
		describe('Площадь всей поверности', function () {
			it(`Должно вернуть ${exceptedResult}, радиус = ${radius}, высота = ${height}`, function () {
				let result = cylinderObj.getFullArea();

				assert.equal(result, exceptedResult);
			})
		});
	});
};

module.exports.stdin = {
	'lateralSurfaceAreaTests' : {
		'test1': {
			'values': [3, 3],
			'exceptedResult': 57
		},
		'test2': {
			'values': [0, 27],
			'exceptedResult': 0
		},
		'test3': {
			'values': [-1, -2],
			'exceptedResult': 13
		},
	},
	'fullAreaTests' : {
		'test1': {
			'values': [4, 5],
			'exceptedResult': 226
		},
		'test2': {
			'values': [0, -2],
			'exceptedResult': 0
		},
		'test3': {
			'values': [13, 23],
			'exceptedResult': 2941
		},
	}
}