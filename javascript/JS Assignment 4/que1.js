class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Electronics"),
    new Product(3, "Shoes", 2500, "Fashion"),
    new Product(4, "Keyboard", 1500, "Electronics")
];

products[0].applyDiscount(10);

products.forEach(product => {
    console.log(product.displayDetails());
});

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products with price > 1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));