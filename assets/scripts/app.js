const defaultResult = "0";
var inputSavedToVariable = true;
var currentOutput = "0";
var result = 0;
var firstNumber;
var secondNumber;
var operation;
var negative = false;
var firstCalculation = true;

function roundResult() {
  result = Math.round(result * Math.pow(10, 14)) / Math.pow(10, 14);
}

function deleteSpaces() {
  currentOutput = currentOutput.replace(/\s/g, "");
}

function checkNegative() {
  if (parseFloat(currentOutput) < 0) {
    currentOutput = currentOutput.slice(1);
    negative = true;
  }
}

function makeNegative() {
  if (negative) {
    currentOutput = "-" + currentOutput;
    negative = false;
  }
}

function formatResult() {
  deleteSpaces();
  checkNegative();
  var integer = "";
  var decimalPart = "";
  var index = currentOutput.indexOf(".");
  if (index != -1) {
    integer = currentOutput.slice(0, index);
    decimalPart = currentOutput.slice(index);
  } else {
    integer = currentOutput;
  }
  if (integer.length >= 10) {
    integer =
      integer.slice(0, -9) +
      " " +
      integer.slice(-9, -6) +
      " " +
      integer.slice(-6, -3) +
      " " +
      integer.slice(-3);
  } else if (integer.length >= 7) {
    integer =
      integer.slice(0, -6) +
      " " +
      integer.slice(-6, -3) +
      " " +
      integer.slice(-3);
  } else if (integer.length > 3) {
    integer = integer.slice(0, -3) + " " + integer.slice(-3);
  }
  currentOutput = integer + decimalPart;
  makeNegative();
}

function input(number) {
  if (!inputSavedToVariable) checkNegative();
  if (inputSavedToVariable || currentOutput == "0") {
    currentOutput = number;
    inputSavedToVariable = false;
  } else if (currentOutput.length == 15) return;
  else {
    currentOutput += number;
    formatResult();
  }
  if (!inputSavedToVariable) makeNegative();
  outputResult(currentOutput);
}

function input9() {
  input("9");
}
function input8() {
  input("8");
}
function input7() {
  input("7");
}
function input6() {
  input("6");
}
function input5() {
  input("5");
}
function input4() {
  input("4");
}
function input3() {
  input("3");
}
function input2() {
  input("2");
}
function input1() {
  input("1");
}
function input0() {
  if (currentOutput == 0) return;
  else input("0");
}

function backspace() {
  if (currentOutput.length == 1) {
    currentOutput = defaultResult;
  } else {
    if (currentOutput.endsWith(" ")) currentOutput = currentOutput.slice(0, -2);
    else currentOutput = currentOutput.slice(0, -1);
    formatResult();
  }
  if (!firstCalculation) clearAll();
  outputResult(currentOutput);
}

function clearEntry() {
  currentOutput = defaultResult;
  outputResult(currentOutput);
}

function clearAll() {
  currentOutput = defaultResult;
  firstNumber = null;
  secondNumber = null;
  operation = null;
  result = null;
  negative = false;
  inputSavedToVariable = true;
  firstCalculation = true;
  outputResult(currentOutput);
}

function plusMinus() {
  var negative;
  deleteSpaces();
  negative = parseFloat(currentOutput);
  negative *= -1;
  currentOutput = negative.toString();
  formatResult();
  console.log(firstNumber, secondNumber);
  outputResult(currentOutput);
}

function point() {
  if (currentOutput.search(/[.]/) == -1) currentOutput += ".";
  inputSavedToVariable = false;
}

function saveInput() {
  inputSavedToVariable = true;
  deleteSpaces();
  var input = parseFloat(currentOutput);
  formatResult();
  return input;
}

function add() {
  firstCalculation = true;
  operation = "add";
  firstNumber = saveInput();
}

function subtract() {
  firstCalculation = true;
  operation = "subtract";
  firstNumber = saveInput();
}

function multiply() {
  firstCalculation = true;
  operation = "multiply";
  firstNumber = saveInput();
}

function divide() {
  firstCalculation = true;
  operation = "divide";
  firstNumber = saveInput();
}

function equal() {
  if (firstCalculation) secondNumber = saveInput();
  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
  }
  roundResult();
  firstNumber = result;
  if (operation == undefined) result = currentOutput;
  currentOutput = result.toString();
  firstCalculation = false;
  formatResult();
  outputResult(currentOutput);
}

btn9.addEventListener("click", input9);
btn8.addEventListener("click", input8);
btn7.addEventListener("click", input7);
btn6.addEventListener("click", input6);
btn5.addEventListener("click", input5);
btn4.addEventListener("click", input4);
btn3.addEventListener("click", input3);
btn2.addEventListener("click", input2);
btn1.addEventListener("click", input1);
btn0.addEventListener("click", input0);
btnBackspace.addEventListener("click", backspace);
btnClearEntry.addEventListener("click", clearEntry);
btnClear.addEventListener("click", clearAll);
btnPlusMinus.addEventListener("click", plusMinus);
btnPoint.addEventListener("click", point);
btnAdd.addEventListener("click", add);
btnSubtract.addEventListener("click", subtract);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
btnEqual.addEventListener("click", equal);