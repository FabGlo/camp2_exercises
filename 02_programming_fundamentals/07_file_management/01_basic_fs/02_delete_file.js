const fs = require("fs");

function deleteFile (filenameToDelete){
  if (isAFile(filenameToDelete)){
    fs.unlinkSync(filenameToDelete);
    return true;
  }
  return false;
}

function isAFile(filenameToDelete){
  const stats = fs.lstatSync(filenameToDelete);
  return stats.isFile();
}

module.exports = deleteFile
