const fs = require("fs");
const path = require("path");


function pwd() {
  return path.resolve();
}

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

deleteFile("plop");
