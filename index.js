const { promptUser } = require('./lib/prompt.js');
const { generateSVG } = require('./lib/generateSVG.js');

promptUser()
    .then((userData) => {
        return generateSVG(userData);
    })
    .then (() => {
        console.log('Generated logo.svg');
    })
    .catch((err) => {
        console.error(err);
    });