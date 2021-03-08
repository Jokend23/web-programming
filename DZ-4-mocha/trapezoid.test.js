let assert = require('assert');
let operations = require('./trapezoid-operations.js');

it('2.1.1. Трапеция. Средняя линия.', function () {
	let expectedResult = 5;
	let result = operations.middleLine(4, 6);
	assert.equal(result, expectedResult);
});

it('2.1.2. Трапеция. Средняя линия.', function () {
	let expectedResult = 10;
	let result = operations.middleLine(6, 14);
	assert.equal(result, expectedResult);
});

it('2.1.2. Трапеция. Средняя линия.', function () {
	let expectedResult = 0;
	let result = operations.middleLine(0, 0);
	assert.equal(result, expectedResult);
});

it('2.2.1. Трапеция. Периметр.', function () {
	let expectedResult = 10;
	let result = operations.perimeter(1, 3, 2, 4);
	assert.equal(result, expectedResult);
});

it('2.2.2. Трапеция. Периметр.', function () {
	let expectedResult = 33;
	let result = operations.perimeter(10, 15, 3, 5);
	assert.equal(result, expectedResult);
});

it('2.2.2. Трапеция. Периметр.', function () {
	let expectedResult = 0;
	let result = operations.perimeter(0, 0, 0, 0);
	assert.equal(result, expectedResult);
});