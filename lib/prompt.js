const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Triangle, Square } = require('./shapes.js');

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
        // const svg = `<svg width = "300" height ="200">
        //     <rect x="0" y="0" width="300" height="200" fill="${answers.shapeColor}"/>
        //     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        //     <${answers.shape} cx="150" cy="100" r="50" fill="none stroke="${answers.textColor}" stroke-width="10"/>
        // </svg>`;
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

        let svg = `<svg> ${shape.render()}<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`
        fs.writeFileSync('logo.svg', svg);
    });