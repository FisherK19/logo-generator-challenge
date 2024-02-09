// Define a base class for geometric shapes
class Shape {
    constructor() {
        this.color = '';
    }
// Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }
// Placeholder method for calculating the area of the shape
    area() {
        // Throws an error if called directly on the Shape class
        throw new Error('Area method is not implemented.');
    }
}
// Define a subclass for representing circles
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
// Method to render a circle as SVG markup
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
// Method to calculate the area of the circle
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
// Define a subclass for representing squares
class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }
  // Method to render a square as SVG markup
    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`;
    }
// Method to calculate the area of the square
    area() {
        return Math.pow(this.sideLength, 2);
    }
}
// Define a subclass for representing triangles
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
 // Method to render a triangle as SVG markup
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
 // Method to calculate the area of the triangle
    area() {
        return (this.base * this.height) / 2;
    }
}
// Export the subclasses for external use
module.exports = { Circle, Square, Triangle };

