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

function caesarCipher(message, key){
    let encryptedMessage = "";
    for(let i = 0; i < message.length; i++){
        let encryptedChar = message.charCodeAt(i);
        if(encryptedChar >= 65 && encryptedChar <= 65 + 25){
            encryptedChar -= 65;
            encryptedChar = modulo(encryptedChar + key);
            encryptedChar += 65;
        };
        encryptedMessage += String.fromCharCode(encryptedChar);
    };
    return encryptedMessage;
};


function modulo(charCode){
    if (charCode < 0){
        charCode = 26 - Math.abs(charCode) % 26;
    }
    return charCode % 26;
};

function analyzeArray(){
    return;
};

export {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray};
