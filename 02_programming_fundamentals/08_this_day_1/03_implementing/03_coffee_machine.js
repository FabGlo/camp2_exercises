const machine = {
  litersOfCoffee : 0,
  fillWithLitersOfCoffee: function(liter){
    this.litersOfCoffee += liter;
    return this;
  },
  expresso: function(){
    if (this.litersOfCoffee >= 0.08){
      this.litersOfCoffee -= 0.08;
      return true;
      }
    return false;
  },
  longCoffee: function(){
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee -= 0.15;
      return true;
      }
    return false;
  }
};


machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.longCoffee()) // => true
console.log(machine.litersOfCoffee) // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false




module.exports = machine;
