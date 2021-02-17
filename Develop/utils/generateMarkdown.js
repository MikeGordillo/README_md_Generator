// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  ## User_Name
          ${answers.username}
  ## Project Title
          ${answers.projectTitle}
  ## Project
          ${answers.projectDescription}
          ${answers.installationProcess}
          ${answers.instruction}
          ${answers.instructionExample}
          ${answers.licenseName}
          ${answers.licenseUrl}
          ${answers.contributorsGitUserName}
  ## Tests
          ${answers.tests}
          `
};

module.exports = generateMarkdown;
