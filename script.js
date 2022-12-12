//creates a calculator object
let calculator = {
    currentButton:"",
    currentTotal: 0,
    currentOperation: ""
};

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