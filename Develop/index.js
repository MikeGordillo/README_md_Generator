// require paths 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")


// array of questions for user
const userInput = inquirer
    .prompt([
        {
            type: "input",
            message: " GitHub user name?",
            name: "username",
            validate: (value) => { if (value) { return true } else { return "please input something" } }
        },
        {
            type: "input",
            message: " Project Title?",
            name: "projectTitle",
            validate: (value) => { if (value) { return true } else { return "please input something" } }

        },
        {
            type: "input",
            message: " Detailed description",
            name: "projectDescription",

        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess",

        },
        {
            type: "input",
            message: "Instructions for use.",
            name: "instruction",

        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample",
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
            message: " names of the contributor/s if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributorsGitUserName",

        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
    ]).then(function (answers) {
        writeToFile("ReadMe.md");
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