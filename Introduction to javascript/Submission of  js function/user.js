
"use strict";

// Object with arrow function
const user = {
    name: "Alex",

    showName: () => {
        console.log(this.name);
    }
};

console.log("Arrow Function Output:");
user.showName(); // undefined

// Fixed using normal function
const user2 = {
    name: "Alex",

    showName: function() {
        console.log(this.name);
    }
};

console.log("Normal Function Output:");
user2.showName(); // Alex
