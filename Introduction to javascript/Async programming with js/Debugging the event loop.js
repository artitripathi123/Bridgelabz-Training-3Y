
"use strict";

/*
Predicted Output:

1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Reason:

Synchronous code executes first.
Promise callbacks enter the microtask queue.
setTimeout callbacks enter the macrotask queue.
Microtasks execute before macrotasks.
*/

console.log("Script start");

// Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");
