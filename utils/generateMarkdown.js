// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// if (license === "GNU") {
//   const licenseURL = "https://img.shields.io/badge/license-GNU-brightgreen";
// } else if (license === "") {
//   const licenseURL = "";
// } else {
//   const licenseURL = "";
// }
// return licenseURL;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  
  # ${answer.projectTitle}`;
}

module.exports = generateMarkdown;

//If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
//Provide instructions and examples for use. Include screenshots as needed.

//To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//```md
//![alt text](assets/images/screenshot.png)
//```

// answer.projectTitle,
//       answer.projectDescription,
//       answer.authorName,
//       answer.gitHubHandle,
//       answer.emailAddres

// ## Description
// ${data.projectDescription}.

// ## Table of Contents

// - [Installation](#installation)
// - [Usage and test instructions](#usage)
// - [License](#license)
// - [How to contribute](#contribute)
// - [Questions?](#questions)

// ## Installation

// If you are contributing to or extending an existing project, it is almost always easiest to continue using that project’s license.
// ${data.installation}

// ## Usage and test instructions

// ${data.usage}

// ## Licence

// ${data.license}

// ## How to Contribute

// ${data.contribute}

// ## Questions?
// Do you have any queries? Please feel to contact me via my Github handle:${data.gitHubHandle}

//`;
