
function nextStep(currentStep) {

    const currentDiv = document.getElementById(
        "step" + currentStep
    );

    const input = currentDiv.querySelector("input");

    // Validate current input
    if (!input.checkValidity()) {
        input.reportValidity();
        return;
    }

    currentDiv.style.display = "none";

    document.getElementById(
        "step" + (currentStep + 1)
    ).style.display = "block";
}

// Go to previous step
function previousStep(currentStep) {

    document.getElementById(
        "step" + currentStep
    ).style.display = "none";

    document.getElementById(
        "step" + (currentStep - 1)
    ).style.display = "block";
}

// Final submission
function submitForm() {

    const password = document.getElementById("password");

    if (!password.checkValidity()) {
        password.reportValidity();
        return;
    }

    document.getElementById("step3").style.display = "none";

    document.getElementById("summary").style.display = "block";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("result").textContent =
        "Name: " + name + " | Email: " + email;
}
