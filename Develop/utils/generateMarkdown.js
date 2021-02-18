// function to generate markdown for README
function generateMarkdown(answers) {
        return `# ${answers.title}
    # Description 
    ${answers.description}

    # TABLE OF CONTENTS
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    * [Credits](#credits)
    * [License](#license)

    # Installation
    ${answers.installation}

    # Usage 
    ${answers.usage}  

    # Credits
    ${answers.credits} 

    # License
    [License](https:/opensource.org/licenses/${answers.license}

    # Description
    ${answers.description}

    # Badges
    ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")

    # Contribution
    ${answers.contribution} 

    # Test
    ${answers.test}

      `
};

module.exports = generateMarkdown;
