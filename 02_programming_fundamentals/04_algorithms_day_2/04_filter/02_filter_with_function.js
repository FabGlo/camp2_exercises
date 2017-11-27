// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  if (fn === "pickEvenNumbers"){
    return pickEvenNumbers(array);
  }
  else if
  (fn ==="pickOddNumbers"){
    return pickOddNumbers(array);
  }
  else{
    return array;
  }
}

function pickEvenNumbers(number) {
  const arrayE = [];
  for (let i =0 ; i < number.length; i++){
    if (number[i] % 2 ===0){
      arrayE.push(number[i]);
    }
  }
  return arrayE;
}

function pickOddNumbers(number) {
  const arrayO = [];
  for (let j =0 ; j < number.length; j++){
    if (number[j] % 2 ===1){
      arrayO.push(number[j]);
    }
  }
  return arrayO;
}

filter([1, 2, 3, 4, 5],pickEvenNumbers);

// do not remove this line, it is for tests
module.exports = filter;
