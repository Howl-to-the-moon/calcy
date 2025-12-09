console.log("hamana");

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a /b;
};

function operate (numOne, numTwo, operator) {

switch (operator) {

    case '+':
        console.log(add(numOne, numTwo));
    break;

    case '-':
        console.log(subtract(numOne, numTwo));
    break;

    case '*':
        console.log(multiply(numOne, numTwo));
    break;

    case '/':
        console.log(divide(numOne, numTwo));
    break;

    default:
        console.log('huh');
    break;
}

};








// variables past here

let firstNum = 0;
let secondNum = 0;
let operator = '';

operate(20, 5, '+');






















