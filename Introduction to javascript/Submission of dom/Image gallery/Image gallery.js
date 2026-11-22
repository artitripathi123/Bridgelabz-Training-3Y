
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const previewImage = document.getElementById("previewImage");

// Open modal
gallery.addEventListener("click", function (event) {

    if (event.target.tagName === "IMG") {

        previewImage.src = event.target.src;

        modal.style.display = "flex";
    }
});

// Clicking inside modal should not close it
previewImage.addEventListener("click", function (event) {

    event.stopPropagation();
});

// Close modal when clicking outside image
modal.addEventListener("click", function () {

    modal.style.display = "none";
});
