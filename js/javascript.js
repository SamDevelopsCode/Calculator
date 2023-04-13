const displayContainer = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const equalsButton = document.querySelector(".equals");

const buttons = document.querySelectorAll(".number");
const numbersButtonArray = Array.from(buttons);

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
    
let a = null;
let b = null;
let total = 0;
let displayText = "";
let clicks = 0;

function operate(operator, num1, num2)
{
    if (operator == "+") {
        total = add(num1, num2);
        return total;
    }
    else if (operator == "-") {
        total =subtract(num1, num2);
        return total;
    }
    else if (operator == "*") {
        total = multiply(num1, num2);
        return total;
    }
    else if (operator == "/") {
        total = divide(num1, num2);
        return total;
    }
}

function assignButtonEvents()
{
    for (let i = 0; i < numbersButtonArray.length; i++)
    {        
        numbersButtonArray[i].addEventListener("click", () => 
        { 
            display(numbersButtonArray[i].textContent);
            clicks = 0;            
        })
    }

    clearButton.addEventListener("click", () => 
    {
        console.log("Clicked CLEAR.");
        displayContainer.textContent = "";
        a = null;
        b = null;
        total = null;
        temp = null;
    })    

    addButton.addEventListener("click", () => 
    {   
        if(a == null && clicks == 0)
        {
            a = parseInt(displayContainer.textContent); 
            displayText = "";
            clicks += 1;
        }
        else if (a != null && b == null && clicks == 0)
        {
            b = parseInt(displayContainer.textContent);

            operate("+", a, b);
            displayContainer.textContent = total.toString();
            displayText = "";

            a = total;
            b = null;
            clicks += 1;
        }        

        console.log("tempText: ", displayText);
        console.log("a: ", a);
        console.log("b: ", b);
        console.log("total: ", total);

    })

    subtractButton.addEventListener("click", () => 
    {
        console.log("Clicked subtract.");
    })

    multiplyButton.addEventListener("click", () => 
    {
        console.log("Clicked multiply.");
    })

    divideButton.addEventListener("click", () => 
    {
        console.log("Clicked divide.");
    })

    equalsButton.addEventListener("click", () => 
    {
        console.log("Clicked enter. Doing an operation now.");
    })
    
}

function display(text)
{
    displayText += text;
    displayContainer.textContent = displayText;
}

//                         ENTRY POINT
//--------------------------------------------------------------------
assignButtonEvents();