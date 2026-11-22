
"use strict";

document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const usernameRegex = /^.{5,}$/;

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        const message = document.getElementById("message");

        if (!usernameRegex.test(username)) {
            message.textContent =
                "Username must contain at least 5 characters.";
            message.style.color = "red";
        }
        else if (!passwordRegex.test(password)) {
            message.textContent =
                "Password must contain 8 characters, uppercase, lowercase, number and special character.";
            message.style.color = "red";
        }
        else {
            message.textContent = "Login Successful!";
            message.style.color = "green";
        }
    });
