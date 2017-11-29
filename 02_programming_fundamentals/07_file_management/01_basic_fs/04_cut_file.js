const fs = require("fs");

function deleteFile (filenameToDelete){
fs.unlink(
  filenameToDelete,
  (error) => {
    if (error){
      return console.warn(error)
    }
  }
)
return console.log("file deleted");
}


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



function cutPaste(sourceFilename, targetFilename){
  return copyPaste(sourceFilename, targetFilename) && deleteFile(sourceFilename);
}

module.exports = cutPaste;
