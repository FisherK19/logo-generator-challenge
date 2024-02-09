const shapes = require('../lib/shapes.js');
const { Circle, Square, Triangle } = shapes;

describe('Circle', () => {
    // Test cases for Circle class
});

describe('Square', () => {
    // Test cases for Square class
});

describe('Triangle', () => {
    test('calculates the area correctly', () => {
        const triangle = new Triangle(4, 5);
        expect(triangle.area()).toBe(10); 
    });
});

describe('Circle', () => {
    test('calculates the area correctly', () => {
        const circle = new Circle(3);
        expect(circle.area()).toBeCloseTo(28.27, 2); 
    });
});

describe('Square', () => {
    test('calculates the area correctly', () => {
        const square = new Square(2);
        expect(square.area()).toBe(4); 
    });
});



