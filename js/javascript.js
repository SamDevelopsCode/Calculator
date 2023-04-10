// const buttonNumber1 = document.querySelector(".number1");
// buttonNumber1.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber2 = document.querySelector(".number2");
// buttonNumber2.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber3 = document.querySelector(".number3");
// buttonNumber3.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber4 = document.querySelector(".number4");
// buttonNumber4.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber5 = document.querySelector(".number5");
// buttonNumber5.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber6 = document.querySelector(".number6");
// buttonNumber6.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber7 = document.querySelector(".number7");
// buttonNumber7.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber8 = document.querySelector(".number8");
// buttonNumber8.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonNumber9 = document.querySelector(".number9");
// buttonNumber9.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonClear = document.querySelector(".clear");
// buttonClear.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonAdd = document.querySelector(".add");
// buttonAdd.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonSubtract = document.querySelector(".subtract");
// buttonSubtract.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonMultiply = document.querySelector(".multiply");
// buttonMultiply.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonDivide = document.querySelector(".divide");
// buttonDivide.addEventListener('click', () => {
//     alert("Hello World");
// })
// const buttonEquals = document.querySelector(".equals");
// buttonEquals.addEventListener('click', () => {
//     alert("Hello World");
// })

const display = querySelector(".display");
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
        array[i].addEventListener("click", () => {
            console.log(buttonArray[i]);
             //display the correct number when clicked
             //in the display box
        })        
    }

}

createButtonEvents(buttonArray);



