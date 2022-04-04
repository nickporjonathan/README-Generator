// TODO: Create a function that returns a license badge & link based on which license is passed in
// If there is no license, return an empty string
function generateLicense(license) {
  let badge = "";
  if (license === "AGPL v3") {
    badge =
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    return badge;
  } else if (license === "GPL v3") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    return badge;
  } else if (license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return badge;
  } else if (license === "Mozilla Public License 2.0") {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    return badge;
  } else if (license === "The Unlicensed") {
    badge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    return badge;
  } else {
    return "This project does not have a licensed";
  }
}

// TODO: Create a function that generates image
// If there is no license, return an empty string
function generateImage(image, alt, name) {
  if (image === true) {
    return `![${alt}](assts/images/${name})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the collaborators
// If there is no license, return an empty string
function generateCredits(credit, name, github) {
  if (credit) {
    let collab = `
    Collaborators: 
    Name: ${name} 
    Github: https://github.com/${github}
    `;
    return collab;
  } else {
    return "no more contributors";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${generateLicense(data.license)}

  ## Table of Contents:

  ---
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description 

  ---
  ${data.description}

  ## Installation

  ---
  To install all necessary dependecies for this program, open the console and run the following command:
  \`\`\`${data.installation}\`\`\`

  ## Usage

  ---
  ${data.usage}
  ${generateImage(data.confirmImage, data.imageAlt, data.imageName)}

  ## Credits

  ---
  ${generateCredits(data.confirmCredit, data.creditName, data.creditGithub)}

  ### Third Party Assets:
  ${data.assets}

  ### Third Part Documents / Contribution:
  ${data.contribution}

  ## Tests

  ---
  To test this program run this command in the console:
  \`\`\`${data.tests}\`\`\`

  ## Questions

  ---
  Have questions or concerns? Reach out to us:

  Email: ${data.email}
  Github: https://github.com${data.github}
`;
}

module.exports = generateMarkdown;
