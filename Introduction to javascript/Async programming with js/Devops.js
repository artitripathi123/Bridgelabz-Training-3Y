
"use strict";

// Server A
function serverA() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A completed deployment");
            } else {
                reject("Server A deployment failed");
            }
        }, 2000);

    });
}

// Server B
function serverB() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B completed deployment");
            } else {
                reject("Server B deployment failed");
            }
        }, 3000);

    });
}

// Promise.all()
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers");
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.log("Deployment error:", error);
    });

// Promise.race()
Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Fastest response failed:", error);
    });
