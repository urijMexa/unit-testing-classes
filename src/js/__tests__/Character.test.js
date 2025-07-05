import Character from '../Character';

test('should create a character with valid name and type', () => {
  const character = new Character('Alex', 'Bowman');
  const correct = {
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  expect(character).toEqual(correct);
});

test('should throw an error for invalid name (too short)', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters.');
});

test('should throw an error for invalid name (too long)', () => {
  expect(() => new Character('SuperLongName', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters.');
});

test('should throw an error for invalid name (not a string)', () => {
  expect(() => new Character(12345, 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters.');
});

test('should throw an error for invalid type', () => {
  expect(() => new Character('Alex', 'Peasant')).toThrow('Invalid character type.');
});
