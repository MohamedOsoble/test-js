import {sum, capitalize, reverseString, Calculator, caesarCipher, analyzeArray} from './main';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalizes the first letter of the input string', () => {
  expect(capitalize('hello')).toMatch('Hello');
  expect(capitalize('123normandy')).toMatch('123normandy');
  expect(capitalize('Hello World')).toMatch('Hello World');
});

test('reverses the input string', () => {
  expect(reverseString('Hello World')).toMatch('dlroW elloH');
  expect(reverseString('123normandy')).toMatch('ydnamron321');
  expect(reverseString('j')).toMatch('j');
});