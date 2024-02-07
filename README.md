# logo-generator-challenge

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description:
Are you looking for an easy way to generate custom logos for your projects, presentations, or personal branding? Look no further! Our Logo Generator CLI is a versatile tool designed to simplify the process of creating stylish logos with just a few simple steps.
### Why use the Logo Generator CLI?
Efficiency: Generate logos in seconds, saving you time and effort.
Customization: Customize text, colors, and shapes to match your brand or project.
Versatility: Choose from a variety of shapes and styles to create logos for any purpose.
Accessibility: Accessible via the command line, making it easy to integrate into your workflow.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview
- Customization: Customize text, colors, and shapes to create unique logos.
- Versatility: Choose from a variety of shapes, including circles, triangles, and squares.
- Ease of Use: Simple command-line interface makes logo generation quick and straightforward.
- Flexibility: Generate logos with up to three characters for text, allowing for quick iterations and experimentation.
- Export Options: Save generated logos as SVG files for easy integration into your projects.

## The Challenge:

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Usage Instructions
- Run the project with `node index.js`.
- Follow the on-screen instructions to generate logos.
- Once completed a SVG file named "logo.svg" will be created.
- you may also rename the "logo.svg" file to the file name of your choice.

## Screenshots:

### Figure 1. Command line application

### Figure 2. Jest Testing "npm test"

### Figure 3. Generated "logo.svg" file

## License

This project is licensed under the [MIT License](LICENSE).


## Installation Process
- NPM Install
- Inquirer.js
- Canvas

## Credit
- W3 schools
- Chat GPT
- Youtube