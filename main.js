//   | RIP GLUB AGAIN 2025-2025 "glub" |




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


//does the functions based on the operator, and returns the value to total (in calculate)
   


function operate (numOne, numTwo, operator) 
{

    
   
   //switch case to do each of the operations

    switch (operator) 
    {

        case '+':
            return add(numOne, numTwo);
    

        case '-':
            return subtract(numOne, numTwo);

        case '*':
            return multiply(numOne, numTwo);

        case '/':
            return divide(numOne, numTwo);

        default:
            console.log('huh');
        break;
    };

};



/* 
builds the first num
parse float with the `${}` to make sure floats are supported, and we can append to the end of it
display displays the display number in the display 
*/




function buildFirst(num) 
{
    
     firstNum += `${parseFloat(num)}`;
     display.value = firstNum;
     return;
}

/* 
so like. does the same as buildFirst but with a secret inside
*/
function buildSecond(num) 
{

    
    //minature clearCalc to fresh everything and make appending to buildFirst after an equation possible, based on appendFirst
    if (appendFirst == true) 
    {
        secondNum = '';
        isSwap = '';
        operator = '';
        total = '';
        display.value = '';
        appendFirst =  false;
        buildFirst(num);
        return;
    }
    
    
    

    secondNum += parseFloat(num);
    display.value = `${firstNum} ${operator} ${secondNum}`;
     
}





//build on da one or da two based on isSwap
function getNum (button) 
{

    if (isSwap == false) 
    {
        buildFirst(button.textContent)
    } 
    else 
    {
        buildSecond(button.textContent)
    }

}



/* 

the if just gets the symbol, switches to second number, and keeps it from appending to first via appendFirst

*/

function getSymbol (symbol) 
{

    if (isNext == false)
    {
        operator = symbol.textContent;
        display.value = `${firstNum} ${operator}`;
        isNext = true;
        appendFirst = false;
        return isSwap = true;
    } 
    else 
    {
        calculate();
        operator = symbol.textContent;
        display.value = `${firstNum} ${operator}`;
        isSwap = true;
        appendFirst = false;
        return isNext = true;
    }

}


//the good shit. calulates. maybe make it round at some point.
//edit: made it round like 2 seconds later

function calculate () 
{

    //prevents typing if you try to spam operator or click '=' before actually making an equation
    if ( secondNum == '' || operator == '') 
        {
            return;
        }


    //idk either
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    
    total = operate(firstNum, secondNum, operator);


    //exception handlrss. no dividing by 0, rounds by three decimal places, makes total display and sets it to first num and alll dat

    if (total > 9999999999999 || (firstNum == 0 && secondNum == 0)) 
        {
            clearCalc();
            display.value = 'uhuh. funny.';
            total = 0;
        } 
        else if (total % 1 != 0) 
        {
            total = Math.round(total * 1000) / 1000;
            display.value = total;
        } 
        else 
        {
            display.value = total;
        };
        

    //ands sets this up for next equation
    firstNum = total;
    secondNum = '';
    appendFirst = true;
    
}

// ERASES ALL TO OBLITERATED NOTHING.
//kinda wanna make a clear condition of first killing the current 
//number (ie a backspace of sorts), and when clicked a second time 
//does the full wipe. will do this latrrrr 12/16

function clearCalc () 
{

    firstNum = '';
    secondNum = '';
    isSwap = '';
    operator = '';
    total = '';
    display.value = '';
    appendFirst = false;
    isSwap = false;
    isNext = false;

}


//go my beauitful variables


let firstNum = '';
let secondNum = '';
let operator = '';
let isSwap = false;
let isNext = false;
let appendFirst = false;
display = document.querySelector(".calcDisplay");






// variables past here BWHAHA WHAT A JOKE



























