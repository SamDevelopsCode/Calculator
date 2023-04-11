const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const equalsButton = document.querySelector(".equals");

const buttons = document.querySelectorAll("button");
const numbersButtonArray = Array.from(buttons);

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
    
let firstNum = "";
let secondNum = "";

function operate(operator, num1, num2)
{
    if (operator == "+") {
        add(num1, num2);
    }
    else if (operator == "-") {
        subtract(num1, num2);
    }
    else if (operator == "*") {
        multiply(num1, num2);
    }
    else if (operator == "/") {
        divide(num1, num2);
    }
}

function assignButtonEvents()
{    // Loop that assigns events to each button
    for (let i = 0; i < numbersButtonArray.length; i++)
    {        
        numbersButtonArray[i].addEventListener("click", () => 
        {
            displayStuff(numbersButtonArray[i].textContent);
        })
    }

    clearButton.addEventListener("click", () => 
    {
        console.log("Clicked CLEAR.");
    })    

    addButton.addEventListener("click", () => 
    {
        console.log("Clicked add.");
        firstNum = parseFloat(display.textContent); // <-----Feel like if I do this, but its like I need to do this in each operator...Hmm...
        console.log(firstNum);
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

function displayStuff(thing)
{
    display.insertAdjacentText("beforeend", thing);
}

//                      ENTRY POINT
//--------------------------------------------------------------------
assignButtonEvents();


//When an operator is clicked, store the current number
//When the = sign is clicked, store the completed operation
//convert back into a string and display again