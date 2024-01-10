const generateMarkdown = require('./generateMarkdown');

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    // Add your Inquirer questions here
];

inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
});

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Successfully wrote ${fileName}`);
    });
}




