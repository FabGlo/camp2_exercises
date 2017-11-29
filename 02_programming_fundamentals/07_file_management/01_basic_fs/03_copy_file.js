const fs = require("fs");

function copyPaste(sourceFilename, targetFilename){
  if (isAFile(sourceFilename)){
    fs.copyFile(
      sourceFilename,
      targetFilename,
      (error) => {
        if (error){
          return console.warn(error);
        }
      }
    )
    return console.log("File copied");
  }
}

function isAFile(filenameToDelete){
  const stats = fs.lstatSync(filenameToDelete);
  return stats.isFile();
}

module.exports = copyPaste;
