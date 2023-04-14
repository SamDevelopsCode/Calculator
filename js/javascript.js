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
        total = subtract(num1, num2);
        return total;
    }
    else if (operator == "*") {
        total = multiply(num1, num2);
        total = total.toFixed(2);
        total = parseFloat(total);        
        return total;
    }
    else if (operator == "/") {
        total = divide(num1, num2);
        total = total.toFixed(2);
        total = parseFloat(total);           
        
        if (!isFinite(total))
        {
            total = 0;
        }
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
        displayText = "";
        displayContainer.textContent = "";
        a = null;
        b = null;
        total = null;
        lastCalculation = null;
        nextCalculation = null;        
    })    

    addButton.addEventListener("click", () => 
    {   
        if (displayContainer.textContent == "ERROR")
        {
            total = 0;
            displayContainer.textContent = total;
        }
        
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
        if (displayContainer.textContent == "ERROR")
        {
            total = 0;
            displayContainer.textContent = total;
        }

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
        if (displayContainer.textContent == "ERROR")
        {            
            total = 0;
            displayContainer.textContent = total;
        }

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
        if (displayContainer.textContent == "ERROR")
        {            
            total = 0;
            displayContainer.textContent = total;
        }

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
        if (nextCalculation == "/" || lastCalculation == "/" && a == 0 || b == 0)
        {
            lastCalculation = null;
            displayContainer.textContent = "ERROR";
        }
        else 
        {
            calculate(nextCalculation);
        }
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
        console.log("b: ", b);
        b = null;
        clicks += 1;
    }            
}

//                         ENTRY POINT
//--------------------------------------------------------------------
assignButtonEvents();