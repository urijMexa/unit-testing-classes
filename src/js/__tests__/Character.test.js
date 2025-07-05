import Character from '../Character';
import Bowman from '../Bowman';


describe('Character class constructor', () => {
  it('should create a character with valid name and type', () => {
    const character = new Character('Alex', 'Bowman');
    expect(character).toEqual({
      name: 'Alex',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined,
    });
  });

  it.each([
    ['A', 'Bowman', 'Name must be a string with length between 2 and 10 characters.'],
    ['SuperLongName', 'Bowman', 'Name must be a string with length between 2 and 10 characters.'],
    ['Alex', 'Peasant', 'Invalid character type.'],
  ])('should throw an error for invalid arguments', (name, type, expectedError) => {
    expect(() => new Character(name, type)).toThrow(expectedError);
  });
});

describe('levelUp method', () => {
  it('should correctly level up a character', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 50;
    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(25 * 1.2); // 30
    expect(bowman.defence).toBe(25 * 1.2); // 30
    expect(bowman.health).toBe(100);
  });

  it('should throw an error if character is dead', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 0;

    expect(() => bowman.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

describe('damage method', () => {
  it('should correctly reduce health based on damage and defence', () => {
    const bowman = new Bowman('Robin'); // attack: 25, defence: 25
    bowman.damage(10);

    expect(bowman.health).toBe(100 - 7.5); // 92.5
  });

  it('should not allow health to go below zero', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(200);

    expect(bowman.health).toBe(0);
  });

  it('should not change health if character is already dead', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 0;
    bowman.damage(50);

    expect(bowman.health).toBe(0);
  });
});
