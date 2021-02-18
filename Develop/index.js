// require paths 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const userInput = inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the  installation instructions for this project. Write NONE if no instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "How woud you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Name/s of contributor/s in this project.",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Appache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Any other credits?",
            name: "credit"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your E-mail address",
            name: "email"
        },
    ]).then(function (answers) {
        const markDownContent = generateMarkdown(answers)
        writeToFile("ReadMe.md", markDownContent);
        console.log(answers.username);
    });
// console.log(userInput, "anything");
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, '../', fileName), data)
}
// function to initialize program
function init() {
    userInput
}
// function call to initialize program
init();