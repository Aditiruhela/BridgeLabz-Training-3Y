
/* Q6: Progressive Discount System */

let purchaseAmount = 7500;
let discountPercentage = 0;

// Determine discount tier
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}

// Calculate discount and final price
let discount = purchaseAmount * discountPercentage / 100;
let finalPrice = Math.round(purchaseAmount - discount);

// Display results
console.log("Original Total: Rs. " + purchaseAmount);
console.log("Discount: " + discountPercentage + "%");
console.log("Final Price: Rs. " + finalPrice);
