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

module.exports = deleteFile
