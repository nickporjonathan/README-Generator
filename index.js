// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("A project title is required and has not been entered");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What are the details outlining the project?",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "Details have not been entered, please input details to proceed"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What will the main usage of the project be?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("The usage is required and has not been entered");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmImage",
    message: "Add an image here",
    default: true,
  },
  {
    type: "input",
    name: "imageAlt",
    message: "If an image has been added, input alt text here",
    when: ({ confirmImage }) => confirmImage,
    validate: (imageAltInput) => {
      if (imageAltInput) {
        return true;
      } else {
        console.log("Alt text is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "imageName",
    message: "Enter image name, then add desired image to assets folder",
    when: ({ confirmImage }) => confirmImage,
    validate: (imageNameInput) => {
      if (imageNameInput) {
        return true;
      } else {
        console.log("missing image name and file ending");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmCredit",
    message: "Is there anyone that needs to be credited on this project?",
    default: true,
  },
  {
    type: "input",
    name: "creditName",
    message: "input credentials of individuals assisting on this project",
    when: ({ confirmCredit }) => confirmCredit,
    validate: (creditnameInput) => {
      if (creditnameInput) {
        return true;
      } else {
        console.log("credentials are missing and are required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "creditGithub",
    message: "input Github profiles of credited individuals",
    when: ({ confirmCredit }) => confirmCredit,
    validate: (creditGithubInput) => {
      if (creditGithubInput) {
        return true;
      } else {
        console.log("invalid entry of user");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message:
      "From the list, select the option that best describes your license",
    choices: [
      "AGPL v3",
      "GPL v3",
      "MIT",
      "Mozilla Public License 2.0",
      "The Unlicensed",
      "Not Licensed",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: 'Input contribution links or "no contribution" (entry required)',
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("entry required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "assets",
    message:
      'Input all links to assets - including third party libraries - or "no assets" (entry required)',
    validate: (assetsInput) => {
      if (assetsInput) {
        return true;
      } else {
        console.log("no entry inputted");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Input command used to install dependencies here",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("command not inputted, try again");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Input the command required to test the project",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("command not inputted, try again");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("invalid entry");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("invalid entry");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
