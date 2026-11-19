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
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid distance");
        }

        return this.distance * 15;
    }
}

let driver = new Driver("Aman", 4.8, "Swift");

try {
    let trip = new Trip("Dehradun", "Mussoorie", 35);
    console.log("Fare:", trip.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    let trip = new Trip("A", "B", -5);
    console.log("Fare:", trip.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}