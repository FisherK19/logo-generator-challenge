const fs = require('fs');
const prompt = require('prompt-sync')();

function generateLogo(text, textColor, shape, shapeColor) {
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${textColor}">
                ${text}
            </text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent, 'utf-8');
    console.log('Generated logo.svg');
}

function main() {
    console.log('Welcome to the Logo Generator CLI');

    // User input
    const text = prompt('Enter up to three characters for the text: ').slice(0, 3);
    const textColor = prompt('Enter text color (keyword or hexadecimal): ');

    // Shape selection
    console.log('Choose a shape from the list: circle, triangle, square');
    const shape = prompt('Enter the shape: ').toLowerCase();

    const shapeColor = prompt('Enter shape color (keyword or hexadecimal): ');

    // Generate logo
    generateLogo(text, textColor, shape, shapeColor);

    console.log('Logo generation completed.');
}

main();
