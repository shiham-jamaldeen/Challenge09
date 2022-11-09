function renderLicenseBadge(projectLicense) {
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  if (projectLicense === "GNU") {
    const licenseURL = "https://img.shields.io/badge/license-GNU-brightgreen";
    return licenseURL;
  } else if (projectLicense === "MIT") {
    const licenseURL = "https://img.shields.io/badge/License-MIT-red";
    return licenseURL;
  } else if (projectLicense === "ISC") {
    const licenseURL = "https://img.shields.io/badge/License-ISC-blue";
    return licenseURL;
  } else if (projectLicense === "Unlicense") {
    const licenseURL = "https://img.shields.io/badge/License-unlicensed-blue";
    return licenseURL;
  }
}
//function renderLicenseLink(projectLicense) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function installer(projectInstallation) {
  const installURL = "https://www.npmjs.com/package/inquirer/v/8.2.4";
  return installURL;
}
function forkRepo(contributionGuidelines) {
  const forkRepoURL =
    "https://docs.github.com/en/get-started/quickstart/fork-a-repo";
  return forkRepoURL;
}
function screenshots(includeScreenshots) {
  if (includeScreenshots === true) {
    const screenshotsLink = "![Demo of the project.](./images/demo-video.gif)";
    return screenshotsLink;
  } else {
    const screenshotsLink = "**No screenshots added**";
    return screenshotsLink;
  }
}
function renderLicenseSection(projectLicense) {
  // TODO: Create a function to generate markdown for README
  if (projectLicense === "GNU") {
    const lincenseText = `GNU GENERAL PUBLIC LICENSE | Version 3.0 | 29 June 2007

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see https://www.gnu.org/licenses/`;
    return lincenseText;
  } else if (projectLicense === "MIT") {
    const lincenseText = `MIT License
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`;
    return lincenseText;
  } else if (projectLicense === "ISC") {
    const lincenseText = `ISC License

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.`;
  } else if (projectLicense === "Unlicense") {
    const lincenseText = `This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.

    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    For more information, please refer to http://unlicense.org/ `;
    return lincenseText;
  }
}
function generateMarkdown(answer) {
  let answers = `# ${answer.projectTitle} ![${
    answer.projectLicense
  }](${renderLicenseBadge(answer.projectLicense)})

  ## Description
   ${answer.projectDescription}.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#Contribution)
- [Questions?](#questions)
<hr/>

## Installation

${answer.projectInstallation} 
[Inquirer package](${installer(answer.projectInstallation)}) 

## Usage

${answer.projectUsage}

### Screenshots and demo
${screenshots(answer.includeScreenshots)}

## Licence
Copyright (c) [2022]  [${answer.authorName}]

${renderLicenseSection(answer.projectLicense)}

## Contribution

${answer.contributionGuidelines}
 [Github fork a repo](${forkRepo(answer.contributionGuidelines)})

## Questions?
Do you have any queries? 
Please feel to contact me via the following channels:
- Github handle: "${answer.gitHubHandle}."
- Email: ${answer.emailAddress}
`;
  return answers;
}

module.exports = generateMarkdown;
