import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes.js';

// Define __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { createCanvas } from 'canvas'; 

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
        this.textWidth = 0;
        this.textHeight = 0;
    }

    render() {
        const shapeX = 150 - this.textWidth / 2; 
        const shapeY = 125 - this.textHeight / 2; 

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
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

    const examplesDir = path.join(__dirname, 'examples');
    if (!fs.existsSync(examplesDir)) {
        fs.mkdirSync(examplesDir);
    }

    const filePath = path.join(examplesDir, `logo_${userInput.shape}.svg`);

    fs.writeFileSync(filePath, svgContent, 'utf-8');

    console.log(`Generated ${filePath}`);
}

// Run the CLI
main();





































