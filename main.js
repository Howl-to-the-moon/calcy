console.log("glub"); //HES BACK BABY


//these four do the calculations, ezy pzy

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

    
   //does the functions based on the operator, and returns the value
   //to total
   

switch (operator) {

    case '+':
        console.log(add(numOne, numTwo));
        return add(numOne, numTwo);
    

    case '-':
        console.log(subtract(numOne, numTwo));
    return subtract(numOne, numTwo);

    case '*':
        console.log(multiply(numOne, numTwo));
    return multiply(numOne, numTwo);

    case '/':
        console.log(divide(numOne, numTwo));
    return divide(numOne, numTwo);

    default:
        console.log('huh');
    break;
}

};

// you know you can /* */ right
// YEAH SHUT UP


//i'm not sure why i made these two seperate ones but i did

//also uh  builds the numbers yadda yadda. also displays them.
function buildFirst(num) {
    
     firstNum += `${parseFloat(num)}`;
     display.value = firstNum;
     console.log(firstNum);
     return;
}

//so what does this one do I DUNNO
function buildSecond(num) {

    
    
    if (onARoll == true) {
    secondNum = '';
    isSwap = '';
    operator = '';
    total = '';
    display.value = '';
    onARoll =  false;
    buildFirst(num);
    return;
    }
    
    
    

     secondNum += parseFloat(num);
    display.value = `${firstNum} ${operator} ${secondNum}`;
     console.log(secondNum);
}





//i looked up inline button stuff and i think this is the easiest
//way to not end up giving each button their own ids and values

//oh also an if so it doesn't keep stacking on one
function getNum (button) {

    if (isSwap == false) {
        buildFirst(button.textContent)
    } else {
        buildSecond(button.textContent)
    }

}



//gets operator and switches permanently to second number building.

//needs workshopping for odins project shit so
//i need to focus here tmmrw
function getSymbol (symbol) {

    if (isNext == false){
    operator = symbol.textContent;
    console.log(operator);
    display.value = `${firstNum} ${operator}`;
    isNext = true;
    onARoll = false;
    return isSwap = true;
    } else {
        calculate();
        operator = symbol.textContent;
        console.log(operator);
        display.value = `${firstNum} ${operator}`;
        isSwap = true;
        onARoll = false;
        return isNext = true;
    }

}


//the good shit. calulates. maybe make it round at some point.
//edit: made it round like 2 seconds later

function calculate () {
    if ( secondNum == '' || operator == '') {
        return;
    }
        
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    console.table(firstNum, secondNum, operator);
    total = operate(firstNum, secondNum, operator);

    if (total > 9999999999999 || (firstNum == 0 && secondNum == 0)) {
        clearCalc();
        display.value = 'uhuh. funny.';
        total = 0;

    } else if (total % 1 != 0) {
        total = Math.round(total * 1000) / 1000;
        display.value = total;
    } else {
    display.value = total;
    };
    firstNum = total;
    console.log(firstNum);
    secondNum = '';
    onARoll = true;
    
}

// ERASES ALL TO OBLITERATED NOTHING.
//kinda wanna make a clear condition of first killing the current 
//number (ie a backspace of sorts), and when clicked a second time 
//does the full wipe.

function clearCalc () {

    firstNum = '';
    secondNum = '';
    isSwap = '';
    operator = '';
    total = '';
    display.value = '';


}


// in the homestretch now. just need another varibale and a function
// or two to meet the requirments of the project. (the if you click
// an operator after already having a second number, it preforms
// the operate() immeaditly)


let firstNum = '';
let secondNum = '';
let operator = '';
let isSwap = false;
let isNext = false;
let onARoll = false;

//event stuff og

display = document.querySelector(".calcDisplay");






// variables past here



























