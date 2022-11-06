// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
let questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

// TODO: Create a function to initialize app
function init() {
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
    ])
    .then((answer) => {
      //print input to

      let data = generateMarkdown(
        answer.projectTitle
        // answer.projectDescription,
        // answer.authorName,
        // answer.gitHubHandle,
        // answer.emailAddress
      );
      //console.timeLog(data);
      const fileName = "./utils/ReadMe-generated.md";
      writeToFile(fileName, data);
      //console.log("Success! Your data has been recorded: " + fileName);
    });
}

// Function call to initialize app
init();
