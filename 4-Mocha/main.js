const circleTests = require('./tests/circle.test.js');
const cylinderTests = require('./tests/cylinder.test.js');
const trapezoidTests = require('./tests/trapezoid.test.js')

const shares = require('./models/shares.js');


// Запуск тестов для площади круга
let cirlecSquareTests  = circleTests.stdin['squareTests'];
for (let i in cirlecSquareTests) {
	let test = cirlecSquareTests[i];
		let exceptedResult = test['exceptedResult'];
	let circle = new shares.Circle(test['value']);

	circleTests.circleSquare(circle, exceptedResult);
}

// Запуск тестов для периметра круга
let cirlecPerimeterTests  = circleTests.stdin['perimeterTests'];
for (let i in cirlecPerimeterTests) {
	let test = cirlecPerimeterTests[i];
	let exceptedResult = test['exceptedResult'];
	let circle = new shares.Circle(test['value']);

	circleTests.circlePerimeter(circle, exceptedResult);
}

// Запуск тестов для площади боковой поверхности цилиндра
let cylinderLateralSurfaceAreaTests  = cylinderTests.stdin['lateralSurfaceAreaTests'];
for (let i in cylinderLateralSurfaceAreaTests) {
	let test = cylinderLateralSurfaceAreaTests[i];
	let exceptedResult = test['exceptedResult'];
	let cylinder = new shares.Cylinder(test['values'][0], test['values'][1]);

	cylinderTests.lateralSurfaceArea(cylinder, exceptedResult);
}

// Запуск тестов для площади всей поверхности цилиндра
let cylinderFullAreaTests  = cylinderTests.stdin['fullAreaTests'];
for (let i in cylinderFullAreaTests) {
	let test = cylinderFullAreaTests[i];
	let exceptedResult = test['exceptedResult'];
	let cylinder = new shares.Cylinder(test['values'][0], test['values'][1]);

	cylinderTests.fullArea(cylinder, exceptedResult);
}

// Запуск тестов для средней линии трапеции
let trapezoidMiddleLineTests  = trapezoidTests.stdin['middleLineTests'];
for (let i in trapezoidMiddleLineTests) {
	let test = trapezoidMiddleLineTests[i];
	let exceptedResult = test['exceptedResult'];
	let trapezoid = new shares.Trapezoid(test['values'][0], test['values'][1], test['values'][2], test['values'][3]);

	trapezoidTests.middleLine(trapezoid, exceptedResult);
}

// Запуск тестов для периметра трапеции
let trapezoidPerimeterTests  = trapezoidTests.stdin['perimeterTests'];
for (let i in trapezoidPerimeterTests) {
	let test = trapezoidPerimeterTests[i];
	let exceptedResult = test['exceptedResult'];
	let trapezoid = new shares.Trapezoid(test['values'][0], test['values'][1], test['values'][2], test['values'][3]);
	
	trapezoidTests.perimeter(trapezoid, exceptedResult);
}

