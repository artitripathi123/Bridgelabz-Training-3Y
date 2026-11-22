
"use strict";

// Q10 - Nested Hoisting and Closures

// Original Code
function outer() {
    console.log(count); // undefined
    var count = 5;

    function inner() {
        console.log(count); // undefined
        var count = 10;
    }

    inner();
}

outer();

// Output:
// undefined
// undefined


// 1. Hoisting with Separate Memory Contexts

function outerHoisting() {
    var count; // Hoisted

    console.log(count); // undefined

    count = 5;

    function innerHoisting() {
        var count; // Separate local variable, hoisted

        console.log(count); // undefined

        count = 10;
    }

    innerHoisting();
}

outerHoisting();


// 2. Convert Inner Function into Arrow Function

function outerArrow() {
    console.log(count); // undefined
    var count = 5;

    const inner = () => {
        console.log(count); // 10

        var count = 10;
        console.log(count); // 10
    };

    inner();
}

outerArrow();

// Output:
// undefined
// undefined
// 10


// 3. Arrow Function Without Local count
// Demonstrates lexical scope

function outerLexical() {
    var count = 5;

    const inner = () => {
        console.log(count); // 5
    };

    inner();
}

outerLexical();


// 4. Debug Session
// Add breakpoints on the marked lines.
// Press F5 in VS Code to start debugging.

function debugOuter() {
    console.log(count); // Breakpoint 1
    var count = 5;      // Breakpoint 2

    function debugInner() {
        console.log(count); // Breakpoint 3
        var count = 10;     // Breakpoint 4
    }

    debugInner();
}

debugOuter();
