const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        test('render() method returns SVG string with correct color', () => {
            const circle = new Circle('red');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>')
        });
    });

    describe('Triangle', () => {
        test('render() method returns SVG string with correct color', () => {
            const triangle = new Triangle('green');
            expect(triangle.render()).toEqual('<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="green"/>')
        });
    });

    describe('Square', () => {
        test('render() method returns SVG string with correct color', () => {
            const square = new Square('blue');
            expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="blue"/>')
        });
    });
});