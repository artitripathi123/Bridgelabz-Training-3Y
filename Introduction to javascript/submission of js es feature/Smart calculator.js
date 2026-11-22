"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error class
class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

// Calculator function
function calculate(operation, num1, num2) {
    switch (operation) {
        case "add":
            return num1 + num2;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero!");
            }
            return num1 / num2;

        case "power":
            return Math.pow(num1, num2);

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot calculate the square root of a negative number!");
            }
            return Math.sqrt(num1);

        case "subtract":
            return num1 - num2;

        default:
            throw new InvalidOperationError(
                `Operation '${operation}' is not recognized.`
            );
    }
}

// Execute operations and handle errors
console.log("========== SMART CALCULATOR ==========");
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);
console.log("--------------------------------------");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation.toUpperCase()}: ${result}`);
    } catch (error) {
        console.log(`${operation.toUpperCase()}: ERROR - ${error.message}`);
    }
}

console.log("======================================");