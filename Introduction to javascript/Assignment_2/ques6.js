
let count = 0;

// Increase the counter
function increment() {
    count++;
    console.log("Count:", count);
}

// Decrease the counter
function decrement() {
    count--;
    console.log("Count:", count);
}

// Nested function to demonstrate scope
function counterDetails() {
    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}

// Simulate button clicks
increment();
increment();
increment();

decrement();

counterDetails();
