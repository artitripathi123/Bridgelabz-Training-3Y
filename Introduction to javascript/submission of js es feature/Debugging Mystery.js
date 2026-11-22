"use strict";

function showMessage() {
    greeting = "Welcome"; // undeclared variable
    console.log(greeting);
}

showMessage();


"use strict";

function showMessage() {
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

"use strict";

function showMessage() {
    let greeting = "Welcome";
    let message = greeting;

    console.log(message);
}

showMessage();