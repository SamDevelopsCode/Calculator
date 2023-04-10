const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);

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

function createButtonEvents(array)
{
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].textContent == "C") {
            array[i].addEventListener("click", () => {
                console.log("Clicked CLEAR.");
            })
        }
        else if (array[i].textContent == "+") {
            array[i].addEventListener("click", () => {
                console.log("Clicked add.");
                firstNum = parseFloat(display.textContent); //TODO: Need to show only one number on the screen at a time
                console.log(firstNum);
            })
        }
        else if (array[i].textContent == "-") {
            array[i].addEventListener("click", () => {
                console.log("Clicked subtract.");
            })
        }
        else if (array[i].textContent == "*") {
            array[i].addEventListener("click", () => {
                console.log("Clicked multiply.");
            })
        }
        else if (array[i].textContent == "/") {
            array[i].addEventListener("click", () => {
                console.log("Clicked divide.");
            })
        }
        else if (array[i].textContent == "=") {
            array[i].addEventListener("click", () => {
                console.log("Clicked enter. Doing an operation now.");
            })
        }
        else {
            array[i].addEventListener("click", () => {
                    displayStuff(array[i].textContent);
                })        
        }        
    }
}

function displayStuff(thing)
{
    display.insertAdjacentText("beforeend", thing);
}

//                      ENTRY POINT
//--------------------------------------------------------------------
createButtonEvents(buttonArray);


//Psuedocode
//When an operator is clicked, store the number before the operator
//When the = sign is clicked, store the textContent inside of the display into a variable
//this will be a string, I need to then parse through the string, get all the numbers and store them into variables
//will need to check for what operation is being done as well in between the numbers

//so convert the string into numbers and operators, do the operations
//convert back into a string and display again