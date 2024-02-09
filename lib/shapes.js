class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    area() {
        throw new Error('Area method is not implemented.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`;
    }

    area() {
        return Math.pow(this.sideLength, 2);
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}

module.exports = { Circle, Square, Triangle };

