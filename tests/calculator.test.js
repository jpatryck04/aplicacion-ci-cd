const calc = require('../src/script');

test('sumar dos números', () => {
  expect(calc.add(2, 3)).toBe(5);
});

test('división por cero', () => {
  expect(calc.divide(10, 0)).toBe("Error");
});
