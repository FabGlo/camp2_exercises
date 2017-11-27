// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  const arrayFilter = [];
  if (str === "even"){
    for(let i=0 ; i < array.length ; i++){
      if (array[i] % 2 === 0){
        arrayFilter.push(array[i]);
      }
    }
  }
  else if (str === "odd"){
    for(let j=0 ; j < array.length ; j++){
      if (array[j] % 2 === 1){
        arrayFilter.push(array[j]);
      }
    }
  }
  else if (str !== "odd" && str!== "even"){
    for(let k=0 ; k < array.length ; k++){
      arrayFilter.push(array[k]);
    }
  }
  return arrayFilter;
}

filter([1, 2, 3, 4, 5], "even");

// do not remove this line, it is for tests
module.exports = filter;
