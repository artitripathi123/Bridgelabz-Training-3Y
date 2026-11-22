
const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

// Track mouse movement
box.addEventListener("mousemove", function (event) {

    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;
});

// Drop red dot on double click
box.addEventListener("dblclick", function (event) {

    const dot = document.createElement("div");

    dot.className = "dot";

    // Calculate position relative to box
    const rect = box.getBoundingClientRect();

    dot.style.left = (event.clientX - rect.left - 5) + "px";

    dot.style.top = (event.clientY - rect.top - 5) + "px";

    box.appendChild(dot);
});
