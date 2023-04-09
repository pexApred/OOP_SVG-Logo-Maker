// Exports 'Triangle', 'Circle', and 'Square' classes

class Shape {
    constructor(color){
        this.color = color;
    }
    get area() {
        return null;
    }
    get perimeter() {
        return null;
    }
}

class Circle extends Shape {
    constructor(color, radius ) {
        super (color);
        this.radius = radius;
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    get perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(color, base, height, sideA, sideB) {
        super(color);
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
    }
    get area() {
        return 0.5 * this.base * this.height;
    }
    get perimeter() {
        return this.base + this.sideA + this.sideB;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    get area() {
        return Math.pow(this.side, 2);
    }
    get perimeter() {
        return 4 * this.side;
    }
}

module.exports = Shape;