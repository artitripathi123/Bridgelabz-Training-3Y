
"use strict";

// Function accepting array and callback
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
function double(num) {
    return num * 2;
}

// Square each number
function square(num) {
    return num * num;
}

const doubledNumbers = applyOperation(numbers, double);
const squaredNumbers = applyOperation(numbers, square);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);
