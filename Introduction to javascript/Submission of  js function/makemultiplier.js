
"use strict";

// Outer function
function makeMultiplier(multiplier) {

    // Inner function
    return function(number) {

        return number * multiplier;
    };
}

// Creating multiplier functions
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const quadruple = makeMultiplier(4);

// Calling functions
console.log("Triple:", triple(5));
console.log("Double:", double(5));
console.log("Quadruple:", quadruple(5));
