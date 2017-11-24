// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```
for (let j=1 ; j <= 5; j++){
  for (let m=0 ; m < 1 ; m++){
    const stars = [];
    for (let i=0 ; i<j ; i++){
      stars.push("*");
    }
    console.log(stars.join(""));
  }
}
