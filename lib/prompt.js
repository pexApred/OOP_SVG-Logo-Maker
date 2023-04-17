const shapes = require ('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            name: 'logo',
            message: 'Enter up to three characters.',
            validate: (value) => value.length <= 3 ? true : 'Please enter up to three characters',
        },
        {
            type:'input',
            name: 'textColor',
            message: 'Enter text color by color keyword or a hex color code',
        }
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
    .then((data)) => {
        const svg = `<svg width = "300" height ="200">
            <rect x="0" y="0" width="300" height="200" fill="${answers.shapeColor}"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
            <${answers.shape} cx="150" cy="100" r="50" fill="none stroke="${answers.textColor}" stroke-width="10"/>
        </svg>`;

        fs.writeFileSync('logo.svg', svg);
    };