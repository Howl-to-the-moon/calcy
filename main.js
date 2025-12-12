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


function getNum (button) {

    if (parseInt(button.textContent) == NaN ) {
        // bullshit code to add the symbol 
        isSwap = true;
        return;
    }

    if (firstNum == 0) {
        firstNum = button.textContent;
    } else {
    firstNum += button.textContent;
    }
    console.log (button.textContent);
    console.log (firstNum);

    //equal sign will do the operate function
    //clear will set everything to 0

}


//event stuff og




// variables past here

let firstNum = 0;
let secondNum = 0;
let isSwap = false;
let operator = '';

operate(20, 5, '+');
























