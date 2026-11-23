class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance!");
        }

        return this.distance * 15;
    }
}

// Creating objects
let user = new User("Rahul", 4.5);
let driver = new Driver("Aman", 4.8, "Car");

console.log("User:", user.name);
console.log("Driver:", driver.name);
console.log("Vehicle:", driver.vehicle);

// Valid trip
try {
    let trip = new Trip("Delhi", "Noida", 20);
    console.log("Total Fare: Rs.", trip.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid trip
try {
    let trip = new Trip("Delhi", "Noida", -5);
    console.log("Total Fare:", trip.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}