
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
    

function operate(num1, num2, operator)
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
