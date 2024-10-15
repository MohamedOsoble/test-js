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

function calcAvg(arr){
    let length = arr.length;
    let sum = 0;
    arr.forEach((element) => sum += element)
        
    return sum / length;
}

function analyzeArray(inputArr){
    if (inputArr.length < 1) {
        return {
            average: 0,
            min: 0,
            max: 0,
            length: 0
        };
    }
    return {
        average: calcAvg(inputArr),
        min: Math.min(...inputArr),
        max: Math.max(...inputArr),
        length: inputArr.length
    };
};

export {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray};
