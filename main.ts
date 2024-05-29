let num1: number = 6;
let num2: number = 4;
let operator: string = "+";

let num3: number = 4;
let num4: number = 2;

function calculate(num1: number, num2: number, operator: string){
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