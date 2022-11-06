// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

function writeToFile(fileName, data) {
  // TODO: Create a function to write README file

  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log(
          "Success! Your file was successfully created " + " " + fileName
        )
  );
}

function init() {
  // TODO: Create a function to initialize app
  //Call inquirer.prompt to request input from the user
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project? (Required)",
        name: "projectTitle",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "projectDescription",
      },
      {
        type: "input",
        message: "What is your name? (Required)",
        name: "authorName",
      },
      {
        type: "input",
        message: "What is your Github handle? (Required)",
        name: "gitHubHandle",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress",
      },
      {
        type: "input",
        message: "What is the usage guidelines for your project?",
        name: "projectUsage",
      },
      {
        type: "input",
        message: "What is the contribution guidelines for your project?",
        name: "contributionGuidelines",
      },
      {
        type: "input",
        message: "How do you install your project?",
        name: "projectInstallation",
      },

      {
        type: "list",
        message: "What is the license for your project?",
        name: "projectLicense",
        choices: ["MIT", "GNU", "ISC", "Unlicense"],
        default: "MIT",
      },
    ])
    .then((answer) => {
      //retreive answers from the inquirer.prompt function and call the markdown generator JS file
      let data = generateMarkdown(answer);
      //now call the writeToFile function to
      const fileName = "./utils/ReadMe-generated.md";
      writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
