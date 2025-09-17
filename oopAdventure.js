//Part 1

// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       belongings: ["small hat", "sunglasses"],
//     },
//   },
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   },
// };

// for (let item of adventurer.inventory) {
//   console.log(item);
// }

// adventurer.roll()
// adventurer.roll()
// adventurer.roll()

class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    } else {
      this.role = role;
    }
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  fight() {
    if (this.inventory.includes("sword")) {
      console.log(`${this.name} begins battling...`);
    } else {
      console.log(`${this.name} has no weapon and must run away...`);
    }
  }
  rest() {
    console.log(`${this.name} rests...`);
  }
}

class Companion {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  support() {
    console.log(`${this.name} provides support...`);
  }
}

// const robin = new Adventurer("Robin", "Fighter");
// robin.inventory.push("sword");
// robin.inventory.push("potion");
// robin.inventory.push("artifact");
// const leo = new Companion("Leo", "Cat");

// console.log(robin);
// console.log(leo);
// console.log(robin.fight());
// console.log(robin.rest());

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const wizards = new AdventurerFactory("Wizard");
const robin = healers.generate("Robin");
const spider = healers.generate("spiderman");
const frank = healers.generate("frank");
const frank2 = wizards.generate("frank2");
const frank3 = wizards.generate("frank3");


console.log(healers.findByIndex(1))
console.log(healers.findByName("frank"))
