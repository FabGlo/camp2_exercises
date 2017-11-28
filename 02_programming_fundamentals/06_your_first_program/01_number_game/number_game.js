let mysteryNumber = Math.round(Math.random()*100);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function test(inputNumber) {
  if (parseInt(inputNumber,10) === mysteryNumber){
    console.log("Well done!");
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

reader.question("What is the mysteryNumber (between 1 and 100)? ", test);



// ```const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function shouldBeFine(answer) {
//   if (answer === "fine") {
//     console.log("Great!");
//     reader.close();
//   } else {
//     reader.question("How are you, really?", shouldBeFine);
//   }
// }
//
// reader.question("How are you?", shouldBeFine);```
