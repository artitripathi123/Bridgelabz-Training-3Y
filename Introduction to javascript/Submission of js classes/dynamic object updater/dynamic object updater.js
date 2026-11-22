

"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Display initial object
document.getElementById("output").textContent =
    JSON.stringify(user, null, 2);

// Update object on form submission
document.getElementById("userForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        user.name = document.getElementById("name").value;
        user.email = document.getElementById("email").value;
        user.age = Number(document.getElementById("age").value);

        document.getElementById("output").textContent =
            JSON.stringify(user, null, 2);

        console.log("Updated User:", user);
    });
