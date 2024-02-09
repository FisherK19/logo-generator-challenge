const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const { Circle, Square, Triangle } = shapes;

// Get the directory of the current module file
const currentModuleDir = __dirname;

const { createCanvas } = require('canvas');

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
        this.textWidth = 0;
        this.textHeight = 0;
    }

    render() {
        const canvasWidth = Math.max(300, this.textWidth + 50); // Adjusted width based on text width
        const canvasHeight = Math.max(200, this.textHeight + 50); // Adjusted height based on text height
        
        const shapeX = canvasWidth / 2 - this.textWidth / 2; 
        const shapeY = canvasHeight / 2 - this.textHeight / 2; 

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}">
            ${this.shapeElement}
            ${this.textElement}
        </svg>`;
    }

    setTextElement(text, color) {
        const canvas = createCanvas(200, 200); 
        const ctx = canvas.getContext('2d');
    
        ctx.font = '60px Arial';
    
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
    
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
        this.textWidth = textWidth;
    }

    setShapeElement(shape, color) {
        shape.setColor(color); 
        this.shapeElement = shape.render();
    }
}

async function main() {
    console.log('Welcome to the Logo Generator CLI');

    // User input using inquirer
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
            validate: (input) => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal, e.g., "red"):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape from the list:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal, e.g., "green"):',
        },
    ]);

    // Svg class
    const svg = new Svg();

    // Set text element
    svg.setTextElement(userInput.text, userInput.textColor);

    // Set shape element based on user's choice
    switch (userInput.shape) {
        case 'circle':
            svg.setShapeElement(new Circle(), userInput.shapeColor);
            break;
        case 'triangle':
            svg.setShapeElement(new Triangle(), userInput.shapeColor);
            break;
        case 'square':
            svg.setShapeElement(new Square(), userInput.shapeColor);
            break;
        default:
            console.error('Invalid shape selected.');
            return;
    }

    // Render SVG content
    const svgContent = svg.render();

    // Get the directory for examples
    const examplesDir = path.join(currentModuleDir, 'examples');
    if (!fs.existsSync(examplesDir)) {
        fs.mkdirSync(examplesDir);
    }

    const filePath = path.join(examplesDir, `logo_${userInput.shape}.svg`);

    fs.writeFileSync(filePath, svgContent, 'utf-8');

    console.log(`Generated ${filePath}`);
}

// Run the CLI
main();











































