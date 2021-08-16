const reset = document.querySelector(".js-reset");
const screen = document.querySelector(".js-screen");
const number0 = document.querySelector("#number_0");
const number1 = document.querySelector("#number_1");
const number2 = document.querySelector("#number_2");
const number3 = document.querySelector("#number_3");
const number4 = document.querySelector("#number_4");
const number5 = document.querySelector("#number_5");
const number6 = document.querySelector("#number_6");
const number7 = document.querySelector("#number_7");
const number8 = document.querySelector("#number_8");
const number9 = document.querySelector("#number_9");
const plus = document.querySelector("#op_plus");
const minus = document.querySelector("#op_minus");
const multiply = document.querySelector("#op_multiply");
const divide = document.querySelector("#op_divide");
const equal = document.querySelector("#op_equal");
const DEFALUT = null;

let operand1 = DEFALUT;
let operand2 = DEFALUT;
let operator = DEFALUT;
let result = DEFALUT;

function calculate() {
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;

        case "-":
            result = operand1 - operand2;
            break;

        case "*":
            result = operand1 * operand2;
            break;

        case "/":
            result = operand1 / operand2;
            break;
    }
}

function showScreen(number) {
    screen.innerText = number;
}

function handleResetClick() {
    showScreen(0);
    operand1 = DEFALUT;
    operand2 = DEFALUT;
    operator = DEFALUT;
    result = DEFALUT;
}

function handleNumberClick(event) {
    const number = parseInt(event.target.innerText, 10);
    if (operator === DEFALUT) {
        operand1 = 10 * (operand1 === DEFALUT ? 0 : operand1) + number;
        result = operand1;
        showScreen(result);
    } else {
        operand2 = 10 * (operand2 === DEFALUT ? 0 : operand2) + number;
        showScreen(operand2);
    }
}

function handleOpClick(event) {
    if (operator !== DEFALUT) {
        if (operator !== "=") {
            calculate();
            operand1 = result;
            operand2 = DEFALUT;
        }
        showScreen(result);
    }
    operator = event.target.innerText;
}

function init() {
    reset.addEventListener("click", handleResetClick);
    number0.addEventListener("click", handleNumberClick);
    number1.addEventListener("click", handleNumberClick);
    number2.addEventListener("click", handleNumberClick);
    number3.addEventListener("click", handleNumberClick);
    number4.addEventListener("click", handleNumberClick);
    number5.addEventListener("click", handleNumberClick);
    number6.addEventListener("click", handleNumberClick);
    number7.addEventListener("click", handleNumberClick);
    number8.addEventListener("click", handleNumberClick);
    number9.addEventListener("click", handleNumberClick);
    plus.addEventListener("click", handleOpClick);
    minus.addEventListener("click", handleOpClick);
    multiply.addEventListener("click", handleOpClick);
    divide.addEventListener("click", handleOpClick);
    equal.addEventListener("click", handleOpClick);
}

init();