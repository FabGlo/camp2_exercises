class Fish {
  constructor(name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}

// type 0: carnivor  1: vegan

class Algae {
  constructor(height) {
    this.height = height;
  }
}

class Aquarium {
  constructor(fishes,algaes){
    this.fishes = fishes;
    this.algaes = algaes;

  }
  addFish(fish){
    this.fishes.push(fish);
  }
  addAlgae(algae){
    this.algaes.push(algae);
  }
  endTurn(){
    this.fishes.map(element => {
      if (element.type === 0){
        this.fishes.splice(this.fishes.length-1, 1);
      }else{
        this.algaes.splice(this.algaes.length-1, 1);
      }
      return true;
    }
    );
  }}


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae,
};
