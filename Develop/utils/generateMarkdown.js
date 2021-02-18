// function to generate markdown for README
function generateMarkdown(data) {
        return `# ${data.title}
        ![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)
        
        Name: ${data.name}
        GitHub user name: ${data.gitHub}
          
        ## Table of contents:  
        * [description](#description)
        * [Installation](#Installation)
        * [Usage](#usage)
        * [License](#license)
        * [Testing](#testing)
        * [Questions](#questions)
        
        ## Description:
        ${data.description}
        ## Installation:
        ${data.installation}
        ## Usage:
        ${data.usage}
        ## license:
        ${data.license}
        
        ## Contributing:
        ${data.contribute}
        ## Testing:
        ${data.tests}
        ## Questions:
        Contact ${data.name} with any questions at ${data.contact}
      `
};

module.exports = generateMarkdown;