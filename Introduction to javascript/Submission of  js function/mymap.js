
"use strict";

// Adding custom method to Array prototype
Array.prototype.myMap = function(callback) {

    const result = [];

    for (let i = 0; i < this.length; i++) {

        // Apply callback to each element
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Original array
const numbers = [1, 2, 3];

// Double each number
const doubled = numbers.myMap(function(num) {
    return num * 2;
});

// Square each number
const squared = numbers.myMap(num => num * num);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);
console.log("Squared Array:", squared);
