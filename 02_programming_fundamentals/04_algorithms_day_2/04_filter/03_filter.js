// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  return array.filter(fn);
}

function pickEvenNumbers(number){
  return number % 2 ===0;
}

function pickOddNumbers(number){
  return number % 2 ===1;
}

// do not remove this line, it is for tests
module.exports = filter;
