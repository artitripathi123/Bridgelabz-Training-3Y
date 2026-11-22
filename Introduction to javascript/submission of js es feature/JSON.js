
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {

    try {
        // Step 1: Parse JSON string into JavaScript object
        const obj = JSON.parse(rawData[i]);

        // Step 2: Check missing keys
        if (!("user" in obj) || !("age" in obj)) {
            throw new Error("Missing required keys (user or age)");
        }

        // Step 3: Convert age into Number
        const age = Number(obj.age);

        // Step 4: Validate age
        if (typeof obj.user !== "string" ||
            obj.user.trim() === "" ||
            !Number.isFinite(age) ||
            age < 0) {
            throw new Error("Invalid user or age value");
        }

        obj.age = age;

        // Step 5: Push valid object into clean array
        cleanData.push(obj);

        // Step 6: Filter users under 18
        if (age < 18) {
            under18Users.push(obj);
        }

    } catch (error) {

        // Log error with line number
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Error at line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Under 18 Users:", under18Users);
