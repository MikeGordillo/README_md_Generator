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
            message: " GitHub user name?",
            name: "username",
            // Required input
            validate: (value) => { if (value) { return true } else { return "Please input something" } }
        },
        {
            type: "input",
            message: " Project Title?",
            name: "projectTitle",
            // Required input
            validate: (value) => { if (value) { return true } else { return "Please input something" } }

        },
        {
            type: "input",
            message: " Detailed description",
            name: "projectDescription",

        },
        {
            type: "input",
            message: "What are the steps required to install your project? Write NONE if none are required.",
            name: "installationProcess",

        },
        {
            type: "input",
            message: "Instructions for use.",
            name: "instruction",

        },

        //List of licenses
        {
            type: "list",
            message: " License name ",
            name: "licenseName",
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A']

        },
        {
            type: "input",
            message: " License url ",
            name: "licenseUrl",

        },
        {
            type: "input",
            message: " Names of the contributor/s if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributorsGitUserName",

        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
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