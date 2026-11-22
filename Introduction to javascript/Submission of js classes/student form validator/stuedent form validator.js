
"use strict";

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

    let isValid = true;

    function validateField(id, errorId, condition, message) {
        const input = document.getElementById(id);
        const error = document.getElementById(errorId);

        if (!condition) {
            input.className = "invalid";
            error.textContent = message;
            isValid = false;
        } else {
            input.className = "valid";
            error.textContent = "";
        }
    }

    validateField("name", "nameError",
        nameRegex.test(name), "Enter valid name");

    validateField("email", "emailError",
        emailRegex.test(email), "Enter valid email");

    validateField("phone", "phoneError",
        phoneRegex.test(phone), "Phone must contain 10 digits");

    validateField("password", "passwordError",
        passwordRegex.test(password),
        "Include uppercase, number and special character");

    const result = document.getElementById("result");

    if (isValid) {
        result.textContent = "Registration Successful!";
        result.className = "success";
    } else {
        result.textContent = "Please correct the errors.";
        result.className = "error";
    }
});
