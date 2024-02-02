const generateMarkdown = require('./generateMarkdown');

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions for your project:',
        // default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project:',
        // default: 'npm test',
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Enter your email address for questions:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
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




