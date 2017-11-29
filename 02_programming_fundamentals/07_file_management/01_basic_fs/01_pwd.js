const path = require("path");

function pwd() {
  return path.resolve();
}

console.log(pwd());

module.exports = pwd
