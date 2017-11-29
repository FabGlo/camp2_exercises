const fs = require("fs");

function copyPaste(sourceFilename, targetFilename){
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

copyPaste("toto" , "plop");
//fs.copyFile(src, dest[, flags], callback)
