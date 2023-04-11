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
    
let a = null;
let b = null;
let total = 0;

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
    console.log("a: ", a)

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
        displayContainer.textContent = "";
        //clear display and refresh all variables holding values
    })    

    addButton.addEventListener("click", () => 
    {
        console.log("Clicked add.");
        a = parseInt(displayContainer.textContent);
        console.log("a: ", a);
        operator = "+"; 
        // 2. override what is shown in the display if more numbers are clicked 
        // 3. then either another operator or the equals will be pressed
        // 4. if operator is clicked, show the value of the operation before
        // 5. if the equals is clicked, show the value of the operation
        //const value = operate(operator, a, b)// complete the operation and store it 
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