// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

function double(array){
  const newArray=[];
  for(let i=0 ; i < array.length ; i++){
    newArray.push(array[i] * 2);
  }
  return newArray;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
