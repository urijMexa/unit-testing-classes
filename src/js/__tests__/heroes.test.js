import {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../heroes';

test.each([
  ['Bowman', Bowman, {
    name: 'Robin', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Swordsman', Swordsman, {
    name: 'Arthur', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Magician', Magician, {
    name: 'Merlin', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Undead', Undead, {
    name: 'Dracula', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Zombie', Zombie, {
    name: 'Walker', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Daemon', Daemon, {
    name: 'Diablo', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  }],
])('should create a correct %s character', (_, HeroClass, expected) => {
  const hero = new HeroClass(expected.name);
  expect(hero).toEqual(expected);
});
