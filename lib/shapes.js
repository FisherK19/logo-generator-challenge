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
        return `<circle cx="50%" cy="50%" r="" fill="${this.color}"></circle>`;
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
        return `<rect x="50" y="50" height="${this.sideLength}" width="${this.sideLength}" fill="${this.color}"></rect>`;
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
        const x1 = 0;
        const y1 = this.height;
        const x2 = this.base;
        const y2 = this.height;
        const x3 = this.base / 2;
        const y3 = 0;
    
        // Construct the SVG polygon element with the calculated points
        return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}"></polygon>`;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}

 export default { Circle, Square, Triangle }; // Exporting the classes