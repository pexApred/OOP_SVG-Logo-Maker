// Exports 'Triangle', 'Circle', and 'Square' classes

class Shape {
    constructor(color){
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super (color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/> `
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}"/> `
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<square x="10" y="10" width="30" height="30" fill="${this.color}"/> `
    }
}

module.exports = Shape;