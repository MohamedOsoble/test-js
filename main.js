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

function encrypt(char, start, key){
    let encryptedCharCode = 0;
    if((char + key) > (start + 25)){
        let newKey = (char + key) - (start + 26)
        encryptedCharCode = start + newKey;
    }
    else{
        encryptedCharCode = char + key;
    };
    return encryptedCharCode;
};

function caesarCipher(message, key){

    // Initialize Encrypted Message
    let encryptedMessage = "";

    for(let i = 0; i < message.length; i++){
        // Initialize current Character & Encrypted Char
        let charCode = message.charCodeAt(i);
        let encryptedCharCode = 0;

        // If lowercase, encrypt lower
        if(charCode >= 65 && charCode <= 90){
            encryptedCharCode = encrypt(charCode, 65, key)
        }

        // If uppercase, encrypt upper
        else if(charCode >= 97 && charCode <= 122){
            encryptedCharCode = encrypt(charCode, 97, key);
        }

        // else, just add char
        else{
            encryptedCharCode = charCode;
        };

        encryptedMessage += String.fromCharCode(encryptedCharCode);
    };
    return encryptedMessage;
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
    };
    return {
        average: calcAvg(inputArr),
        min: Math.min(...inputArr),
        max: Math.max(...inputArr),
        length: inputArr.length
    };
};

export {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray};
