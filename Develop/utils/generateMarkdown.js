// function to generate markdown for README
function generateMarkdown(answers) {
        return `
  
  ## User Name
          ${answers.username}         

  ## Project Title
          ${answers.projectTitle}

  ## Project
          ${answers.projectDescription}
          ${answers.installationProcess}
          ${answers.instruction}
          ${answers.instructionExample}
          
 ## License
          https://img.shields.io/badge/License-${answers.licenseName}-blue
          ${answers.licenseName}
          License Info: https://opensource.org/licenses/${answers.licenseName}
          
 ## Contact
          ${answers.email}
          https://github.com/${answers.contributorsGitUserName}
          https://img.shields.io/github-${answers.contributorsGitUserName}-orange 
          ${answers.contributorsGitUserName}         
  ## Tests
          ${answers.tests} 
     
          
`
};

module.exports = generateMarkdown;
