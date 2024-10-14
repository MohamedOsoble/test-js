import {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './main';


test('capitalizes the first letter of the input string', () => {
  expect(capitalize('hello')).toMatch('Hello');
  expect(capitalize('123normandy')).toMatch('123normandy');
  expect(capitalize('Hello World')).toMatch('Hello World');
});

test('reverses the input string', () => {
  expect(reverseString('Hello World')).toMatch('dlroW olleH');
  expect(reverseString('123normandy')).toMatch('ydnamron321');
  expect(reverseString('j')).toMatch('j');
});

test('adds x + y to equal z', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(5, 25)).toBe(30);
  expect(calculator.add(-25, -5)).toBe(-30);
});
