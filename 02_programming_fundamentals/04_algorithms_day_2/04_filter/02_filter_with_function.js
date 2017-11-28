// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  const filtered = [];
  for(let i=0 ; i<array.length ; i++){
    if (fn(array[i])){filtered.push(array[i]);
    }
  }
  return filtered;
}

function pickEvenNumbers(number){
  return number % 2 ===0 ;
}

function pickOddNumbers(number){
  return number % 2 === 1;
}

filter([1, 2, 3, 4, 5],pickEvenNumbers);

// do not remove this line, it is for tests
module.exports = filter;
