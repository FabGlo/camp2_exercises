// A factorial is the multiplication of a number by all numbers
// preceding it until 1.
// For instance, fact(5) = 5 * 4 * 3 * 2 * 1 = 120
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number or
// with something else than a number.
//
// Remember that you can call `fact` inside of itself


function fact(n) {
  let mult = 1;
  if (n > 0){
    for(let i = n ; i > 0 ; i--){
      mult = mult * i;
    }
    return mult;
  }
  else if (n === 0){
    return mult;
  }
  return null;
}


console.log(fact(5));
// do not remove this line, it is for tests
module.exports = fact;
