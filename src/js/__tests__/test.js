import orderByProps from '../main';

test('properties are sorted correctly', () => {
  const result = orderByProps({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(expected);
});

test('properties are sorted correctly', () => {
  const result = orderByProps({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['defence', 'name']);
  const expected = [
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(result).toEqual(expected);
});
