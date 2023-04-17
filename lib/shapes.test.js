const {Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
    test('should render a Circle with default color', () => {
        const circle = new Circle();
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black"/>');
    });

    test('should render a Circle with a custom color', () => {
        const circle = new Circle('green');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
    });
});

describe('Triangle', () => {
    test('should render a Circle with default color', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toEqual('<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="black"/>');
    });

    test('should render a Circle with a custom color', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toEqual('<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="green"/>');
    });
});

describe('Circle', () => {
    test('should render a Circle with default color', () => {
        const square = new Square();
        expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="black"/>');
    });

    test('should render a Circle with a custom color', () => {
        const square = new Square('green');
        expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="green"/>');
    });
});