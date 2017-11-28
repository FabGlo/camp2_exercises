// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  let newArray = [];
  for(let i=0 ; i<unsortedArray.length ; i++){
    if (newArray.length === 0){
      newArray.push(unsortedArray[i]);
    }else{
      newArray.splice(sorted(unsortedArray[i],newArray) , 0 , unsortedArray[i]);
    }
  }
  return newArray;
}

function sorted(number,newArray){
  for(let i=0;i<newArray.length;i++){
    if (number < newArray[i]){
      return i;
    }
  }
  return newArray.length;
}

console.log(sort([24, 7, 9, 72, -8]));
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
