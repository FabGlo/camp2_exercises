const car = {
  speed: 0,
  distance: 0,
  start: function(){
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function(newSpeed){
    this.speed = newSpeed;
    return this;
  },
  drive: function(newMinutes){
    this.distance = this.distance + this.speed * newMinutes /60;
    return this;
  },
  showDistance: function(){
    return console.log(`${this.distance} Km`);
  }
}

module.exports = car;




// Create an object car with four functions:
//
// start() will reset all the car data
// changeSpeed(speed) will change the km/h speed of the car
// drive(minutes) will make your car drive at the previously set speed for that amount of time in minutes
// showDistance() will print the distance you drove as the number of kilometers
// Take care to stock that data inside the object. For instance the code
//
// car.start().changeSpeed(130).drive(42).showDistance();
// should display 91 Km.
