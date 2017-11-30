// See Sparta courses for the exercise summary



const orangeTree = {
  height : 0,  // in cm
  age : 0, //in years
  oranges: 0,
  alive: true,
  pickAnOrange: function(){
    if (this.oranges > 0){
      this.oranges --;
      return true;
    }
    return false;
  },
  ageOneYear: function(){
    this.age ++;
    if(this.age < 10){
      this.height += 25;
      if(this.age >= 5 && this.age < 10){
        this.oranges = 10;
      }
      return this;
    }
    else if (this.age < 20){
      this.height += 10;
      this.oranges = 20;
      return this;
    }
    else if (this.age < 40){
      this.oranges = 5;
      return this;
    }
    else if (this.age >= 40 && this.age < 50){
      this.oranges = 0;
      return this;
    }
    else if(this.age >= 50 && this.age <= 60){
      this.alive = Math.random() <= 0.05;
      return this;
    }
    else if(this.age > 60 && this.age <= 70){
      this.alive = Math.random() <= 0.15;
      return this;
    }
    else if(this.age > 70 && this.age <= 80){
      this.alive = Math.random() <= 0.3;
      return this;
    }
    else if(this.age > 80 && this.age <= 90){
      this.alive = Math.random() <= 0.6;
      return this;
    }
    else if(this.age > 90 && this.age <= 100){
      this.alive = Math.random() > 0.6;
      return this;
    }
  },
  seed: function(){
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    return this;
  },
}


module.exports = orangeTree;
// it should not die until it is at least 50 years old and can't get past 100 years
// When we seed an orangeTree, it resets all its attributes

// Bonus Point: Make it so that the probability for the Orange Tree to die gets bigger as the time passes.
