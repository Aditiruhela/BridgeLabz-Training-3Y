class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(\d+)$/;
        const match = coupon.match(couponRegex);

        if (!match) {
            console.log("Invalid coupon");
            return this.getTotal();
        }

        const discount = Number(match[2]);
        const total = this.getTotal();

        return total - (total * discount / 100);
    }
}

const cart = new Cart();

cart.addItem("Shoes", 2000, 2);
cart.addItem("T-Shirt", 1000, 1);

console.log("Cart Total:", cart.getTotal());

document.getElementById("applyCoupon")
    .addEventListener("click", function() {

        const coupon = document.getElementById("coupon").value;

        const finalTotal = cart.applyCoupon(coupon);

        console.log("Final Total:", finalTotal);

        document.getElementById("result").textContent =
            `Final Total: ₹${finalTotal}`;
    });