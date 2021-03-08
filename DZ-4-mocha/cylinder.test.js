let assert = require('assert');
let operations = require('./cylinder-operations.js');

it('3.1.1. Цилиндр. Площадь боковой поверхности.', function () {
	let expectedResult = 226;
	let result = operations.lateralSurfaceArea(3, 12);
	assert.equal(result, expectedResult);
});

it('3.1.2. Цилиндр. Площадь боковой поверхности.', function () {
	let expectedResult = 188;
	let result = operations.lateralSurfaceArea(5, 6);
	assert.equal(result, expectedResult);
});

it('3.1.3. Цилиндр. Площадь боковой поверхности.', function () {
	let expectedResult = 13;
	let result = operations.lateralSurfaceArea(2, 1);
	assert.equal(result, expectedResult);
});

it('3.2.1. Цилиндр. Площадь всей поверхности.', function () {
	let expectedResult = 38;
	let result = operations.fullArea(2, 1);
	assert.equal(result, expectedResult);
});

it('3.2.2. Цилиндр. Площадь всей поверхности.', function () {
	let expectedResult = 38;
	let result = operations.fullArea(1, 5);
	assert.equal(result, expectedResult);
});

it('3.2.3. Цилиндр. Площадь всей поверхности.', function () {
	let expectedResult = 188;
	let result = operations.fullArea(5, 1);
	assert.equal(result, expectedResult);
});