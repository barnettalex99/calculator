//creates a calculator object
let calculator = {
    currentNum1: null,
    currentNum2: null,
    displayValue: null,
    currentOperator: "",
    inactivateOperator: false
};

//sets variables for important DOM components
const calculatorScreen = document.querySelector(".calculator-screen p");

//creates a function than can add two numbers together
function add(num1,num2){
    let sum = num1 + num2;
    return sum;
}

//function that substracts two numbers
function subtract(num1,num2){
    let diff = num1 - num2;
    return diff;
}

//function that multiplies two numbers
function multiply(num1,num2){
    let product = num1 * num2;
    return product;
}

//function that divides two numbers
function divide(num1,num2){
    let quotient = num1/num2;
    return quotient;
}

//function that sets the calculator screen to displayValue when = is hit
function displayEquals(){
    operate();
    calculatorScreen.textContent = calculator.displayValue;
    calculator.currentNum1 = calculator.displayValue;
    calculator.currentNum2 = null;
    calculator.inactivateOperator = false;
    calculator.currentOperator = "";
}

//resets the calculator
function clearAll(){
    console.log("calculator cleared");
    calculator.currentNum1 = null;
    calculator.currentNum2 = null;
    calculator.displayValue = null;
    calculator.currentOperator = "";
    calculatorScreen.textContent = null;
    calculator.inactivateOperator = false;
}

//function that sets the numbers of the operation
function setNum(val){
   if(calculator.currentNum1 == null && calculator.currentOperator == "" ){
        calculator.currentNum1 = Number(val);
        calculatorScreen.textContent = calculator.currentNum1;
   }
   else if(calculator.currentNum1 != null && calculator.currentOperator == ""){
        calculator.currentNum1 = Number("" + calculator.currentNum1 + val);
        calculatorScreen.textContent = calculator.currentNum1;
   }
   else if (calculator.currentNum2 == null && calculator.currentOperator != ""){
        calculator.currentNum2 = Number(val);
        calculatorScreen.textContent = calculator.currentNum2;
   }
   else if (calculator.currentNum2 != null && calculator.currentOperator != ""){
        calculator.currentNum2 = Number("" + calculator.currentNum2 + val);
        calculatorScreen.textContent = calculator.currentNum2;
   }
}

//sets the operator when the button is clicked
function setOperation(op){
    if (calculator.inactivateOperator == false){
        if(op == "add"){
            calculator.currentOperator = "add";
            calculatorScreen.textContent = "+";
            calculator.inactivateOperator = true;
        }
        else if(op == "subtract"){
            calculator.currentOperator = "subtract";
            calculatorScreen.textContent = "-";
            calculator.inactivateOperator = true;
        }
        else if (op == "multiply"){
            calculator.currentOperator = "multiply";
            calculatorScreen.textContent = "x";
            calculator.inactivateOperator = true;
        }
        else if (op == "divide"){
            calculator.currentOperator = "divide";
            calculatorScreen.textContent = "/";
            calculator.inactivateOperator = true;
        }
    }
    else{
        clearAll();
        calculatorScreen.textContent = "This calculator only takes 2 numbers at a time!"
    }
}

//allows for the correct operation to be chosen and correct result to be returned
function operate(){
    if (calculator.currentOperator == "add"){
        calculator.displayValue = add(calculator.currentNum1, calculator.currentNum2);
    }
    else if (calculator.currentOperator == "subtract"){
        calculator.displayValue = subtract(calculator.currentNum1, calculator.currentNum2);
    }
    else if (calculator.currentOperator == "multiply"){
        calculator.displayValue = multiply(calculator.currentNum1, calculator.currentNum2);
    }
    else if (calculator.currentOperator == "divide"){
        calculator.displayValue = divide(calculator.currentNum1, calculator.currentNum2);
    }
}


