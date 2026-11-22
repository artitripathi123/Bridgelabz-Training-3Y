
"use strict";

// Function to simulate an asynchronous delivery step
function deliveryStep(message) {

    return new Promise((resolve, reject) => {

        // Random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            // Random success or failure
            if (Math.random() > 0.2) {

                console.log(message);
                resolve(message);

            } else {

                reject(new Error("Delivery step failed: " + message));

            }

        }, delay);

    });
}

// Async pipeline
async function runPipeline() {

    try {

        console.log("Start Pipeline");

        // Step 1: Take Order
        await deliveryStep("Step 1: Order taken");

        // Step 2: Prepare Food
        await deliveryStep("Step 2: Food prepared");

        // Step 3: Pack Food
        await deliveryStep("Step 3: Package ready");

        // Step 4: Dispatch Order
        await deliveryStep("Step 4: Out for delivery");

        // Step 5: Deliver Order
        await deliveryStep("Delivery completed!");

    } catch (error) {

        console.log("Pipeline failed!");
        console.log("Error:", error.message);

    }

}

// Execute pipeline
runPipeline();

