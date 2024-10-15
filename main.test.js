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

test('returns array with average of 4, min of 1, max of 8 and length of 6', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
});

test('tests empty array to return all 0s', () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0
  })
});

test('tests array with single value (8) to be all 8 except lenght of 1', () => {
  expect(analyzeArray([8])).toEqual({
    average: 8,
    min: 8,
    max: 8,
    length: 1
  })
});