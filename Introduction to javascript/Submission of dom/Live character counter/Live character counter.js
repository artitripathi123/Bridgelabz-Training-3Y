
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxLength = 100;

// Update counter
message.addEventListener("input", function () {

    const remaining = maxLength - message.value.length;

    counter.textContent =
        remaining + " characters remaining";

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "orange";
    }
    else if (remaining === 0) {
        counter.style.color = "red";
    }
    else {
        counter.style.color = "green";
    }
});

// Prevent typing after 100 characters
message.addEventListener("keydown", function (event) {

    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "ArrowUp", "ArrowDown",
        "Tab", "Home", "End"
    ];

    if (
        message.value.length >= maxLength &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

// Reset everything
resetButton.addEventListener("click", function () {

    message.value = "";

    counter.textContent = "100 characters remaining";

    counter.style.color = "green";
});
