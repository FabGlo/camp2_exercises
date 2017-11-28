let mysteryNumber = Math.round(Math.random()*99)+1;
let count = 0;

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function test(inputNumber) {
  count += +1;
  if (parseInt(inputNumber,10) === mysteryNumber){
    if (count ===1){
      console.log("Amazing!!!");
    }
    else{
      console.log("You won!");
      console.log(`You have made ${count} tries`);
    }
    reader.close();
  }
  else {
    if (inputNumber % 1 !== 0){
      console.log("This was not a number");
    }
    else if (inputNumber>100 || inputNumber<1){
      console.log ("The number is between 1 and 100");
    }
    else if (inputNumber > mysteryNumber){
      console.log("too high");
    }
    else if (inputNumber < mysteryNumber){
      console.log ("too low");
    }
    reader.question("What is the mysteryNumber (between 1 and 100)? ", test);
  }
}
console.log(mysteryNumber);
reader.question("What is the mysteryNumber (between 1 and 100)? ", test);
