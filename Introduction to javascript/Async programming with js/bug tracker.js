
"use strict";

// Promise-based function
function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("API failed to fetch bugs!");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }

        }, 1000);
    });
}

// Fetch and display bugs
getBugs()
    .then(bugs => {
        console.log("Bug List:");

        const bugData = bugs.map((bug, index) => ({
            ID: index + 1,
            Bug: bug
        }));

        console.table(bugData);
    })
    .catch(error => {
        console.log("Error:", error);
    });
