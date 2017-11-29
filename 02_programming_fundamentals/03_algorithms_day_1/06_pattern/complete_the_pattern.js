// Modify this value to test with other values
const numberOfLine = 5;

function pattern(number){
  let line="";
  for (let i = 0 ; i < number ; i++){
    for(let j=number ; j>i ; j--){
      line += j ;
    }
    if (i !== 0) {
      line += "\n";
    }
  }
  return line;
}
const p = pattern;

module.exports=pattern;
