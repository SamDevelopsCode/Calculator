const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
    

let displayValue = "0";

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
        
        if(array[i].textContent != "=") {
            array[i].addEventListener("click", () => {
                displayStuff(array[i].textContent);
            })        
        }
        else if (array[i].textContent == "=") {
            array[i].addEventListener("click", () => {
                console.log("Clicked enter. Doing an operation now.");
            })
        }
    }
}

function displayStuff(thing)
{
    display.insertAdjacentText("beforeend", thing);
}

createButtonEvents(buttonArray);