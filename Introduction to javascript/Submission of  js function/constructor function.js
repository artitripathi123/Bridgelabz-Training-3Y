
"use strict";

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

// Creating two objects
const car1 = new Car("BMW", "X5");
const car2 = new Car("Toyota", "Fortuner");

// Calling prototype method
car1.getDetails();

console.log("----------------");

car2.getDetails();

// Checking shared prototype method
console.log(
    car1.getDetails === car2.getDetails
); // true
