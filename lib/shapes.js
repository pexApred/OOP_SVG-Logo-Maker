// Exports 'Triangle', 'Circle', and 'Square' classes

class Shapes {
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

class Circle extends Shapes {
    constructor(color, radius ) {
        super (color);
        this.radius = radius;
    }
    get area() {
        return ;
    }
    get perimeter() {
        return ;
    }
}

class Triangle extends Shapes {
    constructor(color, base, height, sideA, sideB) {
        super(color);
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
    }
    get area() {
        return ;
    }
    get perimeter() {
        return ;
    }
}

class Square extends Shapes {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    get area() {
        return ;
    }
    get perimeter() {
        return ;
    }
}