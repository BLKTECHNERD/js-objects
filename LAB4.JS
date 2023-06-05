class Hamster {
    constructor(name) {
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
  
    wheelRun() {
      console.log('squeak squeak');
    }
  
    eatFood() {
      console.log('nibble nibble');
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    }
  
    greet() {
      console.log(`Hello! My name is ${this.name}.`);
    }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }
  
  // Instantiate a new Person named Timmy
  const timmy = new Person('Timmy');
  
  // Age Timmy five years
  for (let i = 0; i < 5; i++) {
    timmy.ageUp();
  }
  
  // Have Timmy eat five times
  for (let i = 0; i < 5; i++) {
    timmy.eat();
  }
  
  // Have Timmy exercise five times
  for (let i = 0; i < 5; i++) {
    timmy.exercise();
  }
  
  // Age Timmy 9 more years
  for (let i = 0; i < 9; i++) {
    timmy.ageUp();
  }
  
  // Create a Hamster named "Gus" and set owner as "Timmy"
  const gus = new Hamster('Gus');
  gus.owner = 'Timmy';
  
  // Have Timmy "buy" Gus
  timmy.buyHamster(gus);
  
  // Age Timmy more 15 years
  for (let i = 0; i < 15; i++) {
    timmy.ageUp();
  }
  
  // Have Timmy eat twice
  for (let i = 0; i < 2; i++) {
    timmy.eat();
  }
  
  // Have Timmy exercise twice
  for (let i = 0; i < 2; i++) {
    timmy.exercise();
  }
  
  console.log(timmy);
  console.log(timmy.hamsters);
  
