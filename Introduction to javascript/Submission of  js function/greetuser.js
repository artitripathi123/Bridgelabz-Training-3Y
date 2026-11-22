
"use strict";

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute callback function
    callback();
}

// Function call
greetUser("Alex", showEndMessage);
