
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const success = document.getElementById("success");

// Validate name
function validateName() {

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";

        return false;

    }

    nameError.textContent = "";

    return true;
}

// Validate email
function validateEmail() {

    if (!emailInput.value.includes("@")) {

        emailError.textContent = "Enter a valid email containing @";

        return false;

    }

    emailError.textContent = "";

    return true;
}

// Validate password
function validatePassword() {

    if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        return false;

    }

    passwordError.textContent = "";

    return true;
}

// Live validation
nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("input", validatePassword);

// Form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const validName = validateName();

    const validEmail = validateEmail();

    const validPassword = validatePassword();

    if (validName && validEmail && validPassword) {

        success.textContent =
            "Form Submitted Successfully";

        form.reset();

    } else {

        success.textContent = "";
    }
});
