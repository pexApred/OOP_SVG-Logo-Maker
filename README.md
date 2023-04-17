# Object-oriented Programming Challenge: SVG Logo Maker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

My task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file. This challenge combines many skills such as using node.js, installing packages such as Jest & Inquirer, and setting up javaScript classes as learned in last class module. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Tests](#test)

## Installation

1. Install Node.js on your computer if not done so already.
2. Create a new folder for the project and navigate to it in terminal.
3. Run npm init -y to initialize a new Node.js project.
4. Install the inquirer package by running npm install inquirer@8.2.4.
5. Run the script with the command node index.js.
6. Follow prompts to create SVG file and save it. 
7. Open logo.svg in browser to confirm success.

## Usage

![SVG Logo](./assets/images/10-oop-homework-demo.png)

Walkthrough video below: 

## Credits

Emmanuel Lakis - https://github.com/pexApred
Benicio Lopez - Tutor

Video Submission guide - https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

Helpful SVG Resources

Example SVG - https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg
Scalable Vector Graphics (SVG) - https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
SVG tutorial - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
Basic SVG shapes - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
Text in SVG - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts
SVG VS Code extension - https://marketplace.visualstudio.com/items?itemName=jock.svg

## License

MIT License

Copyright (c) 2023 Emmanuel Lakis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

A test for shapes has been created in file shapes.test.js. To run the test, first install the test runner. Jest is used in this application by running npm install Jest. To run the test, run the command npm test. Analyze the results and fix any issues. 