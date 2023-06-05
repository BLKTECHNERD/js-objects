class Cat {
    constructor(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
    }
  
    meow() {
      console.log(`${this.name} says meow!`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  
    play() {
      console.log(`${this.name} is playing.`);
    }
  }
  
  class Pirate {
    constructor(name, rank, weapon) {
      this.name = name;
      this.rank = rank;
      this.weapon = weapon;
    }
  
    sail() {
      console.log(`${this.name} is sailing the seas.`);
    }
  
    fight() {
      console.log(`${this.name} is ready to fight.`);
    }
  
    plunder() {
      console.log(`${this.name} is plundering treasure.`);
    }
  }
  
  // Create two instances of the Cat class
  const cat1 = new Cat('Whiskers', 3, 'gray');
  const cat2 = new Cat('Smokey', 5, 'black');
  
  // Log both instances to see their properties
  console.log(cat1);
  console.log(cat2);
  
  // Invoke each method from both instances
  cat1.meow();
  cat1.sleep();
  cat1.play();
  
  cat2.meow();
  cat2.sleep();
  cat2.play();
  
  // Instantiate two arrays of three pirates
  const jollyRoger = [
    new Pirate('Jack', 'Captain', 'Cutlass'),
    new Pirate('Anne', 'First Mate', 'Pistol'),
    new Pirate('Edward', 'Cabin Boy', 'Sword')
  ];
  
  const blackPearl = [
    new Pirate('Barbossa', 'Captain', 'Sword'),
    new Pirate('Elizabeth', 'Navigator', 'Dagger'),
    new Pirate('Will', 'Carpenter', 'Musket')
  ];
  
  // Loop over each array and print three properties of each pirate
  jollyRoger.forEach(pirate => {
    console.log(`Name: ${pirate.name}, Rank: ${pirate.rank}, Weapon: ${pirate.weapon}`);
  });
  
  blackPearl.forEach(pirate => {
    console.log(`Name: ${pirate.name}, Rank: ${pirate.rank}, Weapon: ${pirate.weapon}`);
  });
  