"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = 6;
let num2 = 4;
let operator = "+";
let num3 = 4;
let num4 = 2;
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        default:
            console.log("Unsupported operator");
    }
}
console.log(calculate(num1, num2, operator)); // Output: 16
operator = "-"; // Update the operator value
console.log(calculate(num3, num4, operator));
