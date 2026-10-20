const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedPrices = [];

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price = price - price * 0.10;
    } else if (product.category === "fashion") {
        price = price - price * 0.05;
    }

    discountedPrices.push(price);
}

let originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

let finalTotal = discountedPrices.reduce((sum, price) => sum + price, 0);

if (originalTotal > 50000) {
    finalTotal = finalTotal - finalTotal * 0.05;
}

console.log("Original Total:", originalTotal);
console.log("Final Total:", finalTotal);