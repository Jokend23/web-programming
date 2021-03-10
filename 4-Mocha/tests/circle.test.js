const assert = require('assert');
// const operations = require('../operations/circle_operations.js');


module.exports.circleSquare = function (circleObj, exceptedResult) {
	describe('Формулы круга', function () {
		describe('Площадь', function () {
			it(`Должно вернуть ${exceptedResult}, радиус = ${circleObj.radius}`, function () {
				let result = circleObj.getSquare(circleObj.radius);

				assert.equal(result, exceptedResult);
			})
		});
	});
}

module.exports.circlePerimeter = function (circleObj, exceptedResult) {
	describe('Формулы круга', function () {
		describe('Периметр', function () {
			it(`Должно вернуть ${exceptedResult}, радиус = ${circleObj.radius}`, function () {
				let result = circleObj.getPerimeter(circleObj.radius);
				
				assert.equal(result, exceptedResult);
			})
		});
	});
}

module.exports.stdin = {
	'squareTests' : {
		'test1': {
			'value': 3,
			'exceptedResult': 28
		},
		'test2': {
			'value': -4,
			'exceptedResult': 50
		},
		'test3': {
			'value': 0,
			'exceptedResult': 0
		},
	},
	'perimeterTests' : {
		'test1': {
			'value': 2,
			'exceptedResult': 13
		},
		'test2': {
			'value': -7,
			'exceptedResult': -44
		},
		'test3': {
			'value': 14,
			'exceptedResult': 88
		},
	}
}