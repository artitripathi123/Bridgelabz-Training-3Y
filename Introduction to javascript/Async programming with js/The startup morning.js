
"use strict";

// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Water boiled successfully!");
                resolve();
            } else {
                reject("Failed to boil water!");
            }
        }, 1500);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed successfully!");
                resolve();
            } else {
                reject("Coffee brewing failed!");
            }
        }, 1500);
    });
}

// Step 3: Pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into cup...");

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured successfully!");
                resolve();
            } else {
                reject("Failed to pour coffee!");
            }
        }, 1500);
    });
}

// Promise chaining
boilWater()
    .then(() => brewCoffee())
    .then(() => brewCoffee() && pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.log("Error:", error);
    });
