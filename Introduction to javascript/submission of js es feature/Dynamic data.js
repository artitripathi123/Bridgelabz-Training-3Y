"use strict";

// Mixed API data
const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

// Arrays to store valid and invalid data
const validNumbers = [];
const invalidNumbers = [];

// Loop through API data
for (let i = 0; i < apiData.length; i++) {

    const value = apiData[i];

    // Convert value into Number, Boolean and String
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Check whether the converted number is valid
    if (Number.isNaN(numberValue)) {

        invalidNumbers.push(value);

        console.log("Status: Invalid Number");

    } else {

        validNumbers.push(numberValue);

        console.log("Status: Valid Number");
    }
}

// Final report
console.log("\n===== FINAL REPORT =====");

console.log("Valid Numbers:");

for (let i = 0; i < validNumbers.length; i++) {
    console.log(`${i + 1}. ${validNumbers[i]}`);
}

console.log("\nInvalid Numbers:");

for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`${i + 1}. ${invalidNumbers[i]}`);
}

console.log("\nTotal Valid:", validNumbers.length);
console.log("Total Invalid:", invalidNumbers.length);