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

let nextCalculation = null;
let lastCalculation = null;

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
            console.log("display Text: ", displayText);
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
    })    

    addButton.addEventListener("click", () => 
    {   
        if (lastCalculation == null)
        {
            nextCalculation = "+";
            lastCalculation = "+"
            calculate(lastCalculation);
        }
        else
        {
            calculate(nextCalculation);
            nextCalculation = "+";
        }
    })

    subtractButton.addEventListener("click", () => 
    {
        if (lastCalculation == null)
        {
            nextCalculation = "-";
            lastCalculation = "-";
            calculate(lastCalculation);
        }
        else
        {
            calculate(nextCalculation);
            nextCalculation = "-";
        }
    })

    multiplyButton.addEventListener("click", () => 
    {
        if (lastCalculation == null)
        {
            nextCalculation = "*";
            lastCalculation = "*";
            calculate(lastCalculation);
        }
        else
        {
            calculate(nextCalculation);
            nextCalculation = "*";
        }
    })

    divideButton.addEventListener("click", () => 
    {
        if (lastCalculation == null)
        {
            nextCalculation = "/";
            lastCalculation = "/";
            calculate(lastCalculation);
        }
        else
        {
            calculate(nextCalculation);
            nextCalculation = "/";
        }
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

function calculate(operator)
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

        operate(operator, a, b);
        displayContainer.textContent = total.toString();
        displayText = "";

        a = total;
        b = null;
        clicks += 1;
    }        

    console.log("display Text: ", displayText);
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("total: ", total);
}

//                         ENTRY POINT
//--------------------------------------------------------------------
assignButtonEvents();