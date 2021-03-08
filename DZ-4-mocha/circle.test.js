let assert = require('assert');
let operations = require('./circle-operations.js');

it('1.1.1. Круг. Площадь.', function () {
	let expectedResult = 28;
	let result = operations.circle_square(3);
	assert.equal(result, expectedResult);
});

it('1.1.2. Круг. Площадь.', function () {
	let expectedResult = 0;
	let result = operations.circle_square(0);
	assert.equal(result, expectedResult);
});

it('1.1.3. Круг. Площадь.', function () {
	let expectedResult = 28;
	let result = operations.circle_square(-3);
	assert.equal(result, expectedResult);
});

it('1.2.1. Круг. Периметр.', function () {
	let expectedResult = 31;
	let result = operations.circle_perimeter(5);
	assert.equal(result, expectedResult);
});

it('1.2.2. Круг. Периметр.', function () {
	let expectedResult = 0;
	let result = operations.circle_perimeter(0);
	assert.equal(result, expectedResult);
});

it('1.2.3. Круг. Периметр.', function () {
	let expectedResult = -31;
	let result = operations.circle_perimeter(-5);
	assert.equal(result, expectedResult);
});