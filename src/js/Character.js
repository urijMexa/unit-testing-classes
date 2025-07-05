export default class Character {
  constructor(name, type) {
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with length between 2 and 10 characters.');
    }

    if (!validTypes.includes(type)) {
      throw new Error(`Invalid character type. Must be one of: ${validTypes.join(', ')}.`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }


  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character.');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }


  damage(points) {
    if (this.health === 0) {

      return;
    }

    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;


    if (this.health < 0) {
      this.health = 0;
    }
  }
}
