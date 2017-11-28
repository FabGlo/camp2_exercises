// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
function range(num){
  let line="";
  for(let i=num ; i>0 ; i--){
    line += + i;
  }
  return parseInt(line,10);
}

function table(num2, range){
  let result= "";
  for(let j = num2 ; j > 0 ; j--){
    result= result + range(num2)+"\n";
  }
  return result;
}

console.log(table(numberOfLine, range));
