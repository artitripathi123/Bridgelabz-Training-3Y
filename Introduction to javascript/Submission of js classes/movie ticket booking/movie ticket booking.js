
"use strict";

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("Invalid name!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email!");
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10!");
        return;
    }

    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    document.getElementById("ticket").innerHTML = `
        <h3>Booking Successful!</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;

    console.log(booking);
});
