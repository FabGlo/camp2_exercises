const fs = require("fs");

function touch(fileName , rights){
fs.open(fileName, rights, (error) => {
  if (error) {
    console.warn(error);
    return;
  }
  console.log("OK");
});
}
touch("toto" , "w");

module.exports = touch;
