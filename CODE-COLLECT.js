const fs = require('fs');
const path = require('path');

const filesToCollect = [

  //DROP YOUR PATH FILE HERE
  'C:/Users/HP/OneDrive/Documents/NAVBAR.JS', //EXAMPLE, CHANGE WITH YOUR PATH
  'C:/Users/HP/OneDrive/Documents/NAVBAR.JS' 
  //THE LAST PATH MUST WITHOUT COMMA

];

const outputFilePath = 'fileCodeReactV17.txt';

function collectCodeFromFiles(fileList) {
  let collectedCode = '';

  fileList.forEach((file) => {
    if (fs.existsSync(file)) {
      const fileContent = fs.readFileSync(file, 'utf8');
      collectedCode += `// File: ${file}\n`;
      collectedCode += fileContent + '\n\n';
    } else {
      console.warn(`File not found: ${file}`);
    }
  });

  return collectedCode;
}

function writeToFile(content, outputPath) {
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Collected code written to ${outputPath}`);
}

const collectedCode = collectCodeFromFiles(filesToCollect);
writeToFile(collectedCode, outputFilePath);
