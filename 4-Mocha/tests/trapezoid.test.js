const assert = require('assert');
const operations = require('../operations/trapezoid_operations.js');


module.exports.middleLine = function (trapezoidObj, exceptedResult) {
	let top = trapezoidObj.sides['top'];
	let bottom = trapezoidObj.sides['bottom'];

	describe('Формулы цилиндра', function () {
		describe('Площадь боковой поверности', function () {
			it(`Должно вернуть ${exceptedResult}, top = ${top}, bottom = ${bottom}`, function () {
				let result = operations.getMiddleLine(top, bottom);

				assert.equal(result, exceptedResult);
			})
		});
	});
};

module.exports.perimeter = function (trapezoidObj, exceptedResult) {
	let top = trapezoidObj.sides['top'];
	let right = trapezoidObj.sides['right'];
	let bottom = trapezoidObj.sides['bottom'];
	let left = trapezoidObj.sides['left'];

	describe('Формулы цилиндра', function () {
		describe('Площадь боковой поверности', function () {
			it(`Должно вернуть ${exceptedResult}, top = ${top}, right = ${right}, bottom = ${bottom}, left = ${left}`, function () {
				let result = operations.getPerimeter(top, right, bottom, left);

				assert.equal(result, exceptedResult);
			})
		});
	});
};

module.exports.stdin = {
	'middleLineTests' : {
		'test1': {
			'values': [2, 4, 3 ,4],
			'exceptedResult': 2.5
		},
		'test2': {
			'values': [0, 3, 5, 9],
			'exceptedResult': 2.5
		},
		'test3': {
			'values': [-5, -12, 25, -2],
			'exceptedResult': 10
		},
	},
	'perimeterTests' : {
		'test1': {
			'values': [4, 5, 3, 4],
			'exceptedResult': 16
		},
		'test2': {
			'values': [1, 0, 2, -2],
			'exceptedResult': 1
		},
		'test3': {
			'values': [13, 23, 45, 19],
			'exceptedResult': 100
		},
	}
}