// Create a function double which take an integer and return the double of the integer.
// Then, try to create a function called map. This function should take two parameters:
//
// - an array
// - a function
//
// this function apply the function passed as a parameter on each values of the array (also passed as a parameter).
//
// Finally, test map with an array of your choice and the double function.
//
// WARNING: You're not allowed to use `Array.map`!

function double(number){
  const number2 = number + number;
  return number2;
}

function map(array,fn){
  const newArray=[];
  for(let i=0 ; i<array.length ; i++){
    newArray.push(fn(array[i]));
  }
  return newArray;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = { double: double, map: map };
