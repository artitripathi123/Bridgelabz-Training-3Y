
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

// Toggle dropdown
dropdownButton.addEventListener("click", function (event) {

    event.stopPropagation();

    options.style.display =
        options.style.display === "block" ? "none" : "block";
});

// Select option
options.addEventListener("click", function (event) {

    if (event.target.classList.contains("option")) {

        dropdownButton.textContent = event.target.textContent;

        options.style.display = "none";
    }
});

// Close dropdown using capturing phase
document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {

        options.style.display = "none";
    }

}, true);
