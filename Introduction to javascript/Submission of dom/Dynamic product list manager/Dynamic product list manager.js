
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add new product
addButton.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    li.append(span, editButton, deleteButton);

    productList.appendChild(li);

    productInput.value = "";
});

// Event Delegation
productList.addEventListener("click", function (event) {

    const li = event.target.closest("li");

    if (!li) return;

    // Delete product
    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    // Edit product
    if (event.target.classList.contains("edit")) {

        const span = li.querySelector("span");

        if (li.querySelector("input")) return;

        const editInput = document.createElement("input");

        editInput.value = span.textContent;

        span.replaceWith(editInput);

        editInput.focus();

        function saveEdit() {

            if (!editInput.isConnected) return;

            const newSpan = document.createElement("span");

            newSpan.textContent =
                editInput.value.trim() || "Unnamed Product";

            editInput.replaceWith(newSpan);
        }

        editInput.addEventListener("blur", saveEdit);

        editInput.addEventListener("keydown", function (e) {

            if (e.key === "Enter") {
                editInput.blur();
            }

        });
    }
});
