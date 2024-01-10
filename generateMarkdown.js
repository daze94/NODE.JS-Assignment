function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).

GitHub: [${data.github}](https://github.com/${data.github})
`;
}

function renderLicenseBadge(license) {
    if (!license) return '';
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
    if (!license) return '';
    return `* [License](#license)`;
}

function renderLicenseSection(license) {
    if (!license) return '';
    return `## License\n\nThis project is licensed under the ${license} license.`;
}

module.exports = generateMarkdown;
