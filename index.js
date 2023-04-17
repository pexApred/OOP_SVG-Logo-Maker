const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Triangle, Square } = require('./lib/shapes.js');

inquirer
    .prompt([
        {
            type:'input',
            name: 'text',
            message: 'Enter up to three characters.',
            validate: (value) => value.length <= 3 ? true : 'Please enter up to three characters',
        },
        {
            type:'input',
            name: 'textColor',
            message: 'Enter text color by color keyword or a hex color code',
        },
        {
            type:'list',
            name: 'shape',
            message: 'Choose a shape.',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type:'input',
            name: 'shapeColor',
            message: 'Enter shape"s color by color keyword or a hex color code',
        },
    ])
    .then((answers) => {
        let shape;

        let shapeColor = answers.shapeColor;
        if (answers.shape === 'circle') {
            shape = new Circle (shapeColor)
        }
        if (answers.shape === 'triangle') {
            shape = new Triangle (shapeColor)
        }
        if (answers.shape === 'square') {
            shape = new Square (shapeColor)
        }

        let svg = 
            `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`
        fs.writeFileSync('./examples/logo.svg', svg);
    });