
const search = document.getElementById("search");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

search.addEventListener("input", function () {

    const searchValue = search.value.toLowerCase();

    const rows = studentTable.querySelectorAll("tr");

    let found = false;

    rows.forEach(function (row) {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";

            found = true;

        } else {

            row.style.display = "none";
        }
    });

    // Display message if no matching row
    noResults.style.display = found ? "none" : "block";
});
