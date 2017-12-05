let litersOfCoffee= 0;

function putLitersOfCoffee(numberOfLiters){
  litersOfCoffee += numberOfLiters;
}

function consumeLitersOfCoffee(numberOfLiters){
  if(litersOfCoffee >= numberOfLiters){
    litersOfCoffee -=numberOfLiters;
    return true;
  }
  return false;
}

module.exports = {
  putLitersOfCoffee : putLitersOfCoffee,
  consumeLitersOfCoffee : consumeLitersOfCoffee
};
