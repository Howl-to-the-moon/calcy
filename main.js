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

function buildFirst(num) {
     firstNum += num;
     console.log(firstNum);
}

function buildSecond(num) {
     secondNum += num;
     console.log(secondNum);
}






function getNum (button) {

    if (isSwap == false) {
        buildFirst(button.textContent)
    } else {
        buildSecond(button.textContent)
    }

}

function getSymbol (symbol) {

    operator = symbol.textContent;
    console.log(operator);
    return isSwap = true;

}

function calculate () {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    console.table(firstNum, secondNum, operator);
    operate(firstNum, secondNum, operator);
}

//




let firstNum = '';
let secondNum = '';
let isSwap = false;
let operator = '';


//event stuff og

display = document.querySelector(".calcDisplay");

display.value = firstNum;




// variables past here



operate(20, 5, '+');























