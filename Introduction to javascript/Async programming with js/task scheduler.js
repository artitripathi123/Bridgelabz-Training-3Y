
"use strict";

console.log("Start");

// Macrotask
setTimeout(() => {
    console.log("setTimeout callback - Macrotask");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback - Microtask");
});

// Synchronous task
console.log("Synchronous log");

console.log("End");

/*
Expected Output:

Start
Synchronous log
End
Promise callback - Microtask
setTimeout callback - Macrotask

Explanation:

1. Synchronous code executes first.
2. Promise.then() creates a microtask.
3. setTimeout() creates a macrotask.
4. After synchronous execution, JavaScript
   executes all pending microtasks.
5. Then the macrotask queue is processed.

Therefore, microtasks execute before macrotasks.
*/
