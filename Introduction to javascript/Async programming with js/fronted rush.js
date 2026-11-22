
"use strict";

// PART 1: Callback Hell

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

// Nested callbacks
function runCallbackPipeline() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

// PART 2: Async/Await

function asyncStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    await asyncStage("Design");
    await asyncStage("Build");
    await asyncStage("Test");
    await asyncStage("Deploy");
    await asyncStage("Celebrate");

    console.log("Pipeline completed!");
}

// Run one pipeline at a time.

// Run callback version:
runCallbackPipeline();

// Run async version separately after commenting above:
// runAsyncPipeline();

/*
Why async/await is better:

1. Code looks cleaner.
2. Easy to read and understand.
3. Avoids deeply nested callbacks.
4. Error handling is easier with try/catch.
*/
