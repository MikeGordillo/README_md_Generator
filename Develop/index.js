// declaring required consts
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name of application?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Gitub user name?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your E-mail address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this project do?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Directions for using this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Do you have a license for this project?',
        choices: ["Apache_License_2.0", "MIT_License", "Other", "None"],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Is it open for contribution and how?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to Test?',
    }
];


// function to initialize program
function init() {
    console.log("Inside the init function")
    inquirer.prompt(questions).then((response) => {
        fs.writeFileSync("README.md", generateMarkdown(response), function (err) {
            // console log
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        })
    })
}

// function call to initialize program
init();
