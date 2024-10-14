function sum(a, b) {
    return a + b;
  }


function capitalize(inputString){
    return (inputString.charAt(0)).toUpperCase() + inputString.substring(1);
};

function reverseString(inputString){
    return inputString.split('').reverse().join('');
};

const calculator = (function () {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;
    return {add, subtract, multiply, divide};
})();

function caesarCipher(){
    return;
};

function analyzeArray(){
    return;
};

export {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray};
