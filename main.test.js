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

test('subtracts 10 from 13 to equal 3', () => {
  expect(calculator.subtract(13, 10)).toBe(3);
});

test('subtracts into negative number', () => {
  expect(calculator.subtract(5, 10)).toBe(-5);
});

test('multiply two positive integers, 5 and 3, to give 15', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('multiple one positive (5), and one negative(-3) integers to give -15', () =>{
  expect(calculator.multiply(5, -3)).toBe(-15);
});

test('divide two positive dividable integers(49 and 7) to be 7', () =>{
  expect(calculator.divide(49, 7)).toBe(7);
});
