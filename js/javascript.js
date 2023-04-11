const displayContainer = document.querySelector("#display");
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
            display(numbersButtonArray[i].textContent);
        })
    }

    clearButton.addEventListener("click", () => 
    {
        console.log("Clicked CLEAR.");
        //clear display and refresh all variables holding values
    })    

    addButton.addEventListener("click", () => 
    {
        console.log("Clicked add.");
        firstNum = parseFloat(displayContainer.textContent); // 1. when clicked, convert the string into a float and store into a variable
        // 2. override what is shown in the display if more numbers are clicked 
        // 3. then either another operator or the equals will be pressed
        // 4. if operator is clicked, show the value of the operation before
        // 5. if the equals is clicked, show the value of the operation
        //const value = operate("+", firstNum, secondNum)// complete the operation and store it 
        //display(value.toString) // display that total variable
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
    displayContainer.insertAdjacentText("beforeend", text);
}

//                         ENTRY POINT
//--------------------------------------------------------------------
assignButtonEvents();


//When an operator is clicked, store the current number
//When the = sign is clicked, store the completed operation
//convert back into a string and display again