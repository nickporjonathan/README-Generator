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
                console.log("Details have not been entered, please input details to proceed");
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
