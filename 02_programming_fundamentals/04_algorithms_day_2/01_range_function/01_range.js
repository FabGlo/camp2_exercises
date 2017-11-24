// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(beginNumber , endNumber) {
  const array = [];
  if (endNumber > beginNumber) {
    for (let i= beginNumber ; i <= endNumber ; i++){
      array.push(i);
    }
    return array;
  }
  else {
    for (let j= beginNumber ; j >= endNumber ; j--){
      array.push(j);
    }
    return array;
  }
}
const ascArray = range (1,4);
const descArray = range (4,1);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
