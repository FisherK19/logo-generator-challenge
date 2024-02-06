import fs from 'fs';
import inquirer from 'inquirer';

class LogoGenerator {
  static generateLogo(text, textColor, shape, shapeColor) {
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="${shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${textColor}">
              ${text}
          </text>
      </svg>
    `;

    let filePath;
    if (shape === 'general') {
      filePath = 'examples/logo.svg';
    } else {
      filePath = `examples/example_${shape.toLowerCase()}.svg`;
    }

    fs.writeFileSync(filePath, svgContent, 'utf-8');
    console.log(`Generated ${filePath}`);
  }

  static async main() {
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
        choices: ['circle', 'triangle', 'square', 'general'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal, e.g., "green"):',
      },
    ]);

    // Generate logo
    LogoGenerator.generateLogo(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);

    console.log('Logo generation completed.');
  }
}

// Run the CLI
LogoGenerator.main();










