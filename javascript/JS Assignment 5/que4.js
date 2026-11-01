function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(this.brand + " " + this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Tata", "Harrier");

car1.getDetails();
car2.getDetails();

console.log(car1.getDetails === car2.getDetails);