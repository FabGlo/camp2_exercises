/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(list){
  const fizzNumbers = [];
  for (let i = 0 ; i < list.length ; i++){
    if (list[i] % 3 === 0 && list[i] % 5 === 0){
      fizzNumbers.push("FizzBuzz");
    }
    else if (list[i] % 3 === 0){
      fizzNumbers.push("Fizz");
    }
    else if (list[i] % 5 === 0) {
      fizzNumbers.push("Buzz");
    }
    else{
      fizzNumbers.push(list[i]);
    }
  }
  return fizzNumbers;
}
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(fizzBuzz(list));


module.exports = fizzBuzz;
