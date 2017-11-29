// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

for (let j=1 ; j <= 7; j+=2){
  const stars = [];
  for (let m=0 ; m < 1 ; m++){
    for (let k=3-j/2; k>0;k--){
      stars.push(" ");
    }
    for (let i=0 ; i<j ; i++){
      stars.push("*");
    }
    console.log(stars.join(""));
  }
}
