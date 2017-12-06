function toWords(sentence) {
  if (sentence){
    const allWords = sentence.split(/[.?!, :]+/);
    return allWords.filter(word => word !== "");
  }else{
    return false;
  }
}
console.log(toWords("toto maria"));
module.exports = toWords;
