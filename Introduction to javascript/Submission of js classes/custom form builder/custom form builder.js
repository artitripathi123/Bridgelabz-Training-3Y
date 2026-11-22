
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const container = document.getElementById("formContainer");

        let formHTML = `<form id="dynamicForm">`;

        this.fields.forEach((field, index) => {
            formHTML += `
                <label>${field.label}</label>
                <input type="${field.type}"
                       id="field${index}"
                       name="${field.name}"
                       placeholder="${field.label}"
                       required>
                <br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
            <p id="output"></p>
        `;

        container.innerHTML = formHTML;

        document.getElementById("dynamicForm")
            .addEventListener("submit", (event) => {
                event.preventDefault();

                const data = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(data, null, 2);
            });
    }

    getFormData() {
        const formData = {};

        this.fields.forEach((field, index) => {
            formData[field.name] =
                document.getElementById(`field${index}`).value;
        });

        return formData;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder(fields);

builder.createForm();
