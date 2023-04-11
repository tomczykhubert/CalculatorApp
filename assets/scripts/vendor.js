const btn0 = document.getElementById("button-0");
const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btn3 = document.getElementById("button-3");
const btn4 = document.getElementById("button-4");
const btn5 = document.getElementById("button-5");
const btn6 = document.getElementById("button-6");
const btn7 = document.getElementById("button-7");
const btn8 = document.getElementById("button-8");
const btn9 = document.getElementById("button-9");
const btnAdd = document.getElementById("button-add");
const btnSubtract = document.getElementById("button-subtract");
const btnMultiply = document.getElementById("button-multiply");
const btnDivide = document.getElementById("button-divide");
const btnEqual = document.getElementById("button-equal");
const btnPoint = document.getElementById("button-point");
const btnBackspace = document.getElementById("button-backspace");
const btnClear = document.getElementById("button-clear");
const btnClearEntry = document.getElementById("button-clear-entry");
const btnPlusMinus = document.getElementById("button-plus-minus");
const currentResultOutput = document.getElementById("result");

function outputResult(result) {
  currentResultOutput.textContent = result;
}
