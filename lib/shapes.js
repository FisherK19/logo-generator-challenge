// shapes.js
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    area() {
        return Math.pow(this.side, 2);
    }
}

module.exports = { Triangle, Circle, Square };
