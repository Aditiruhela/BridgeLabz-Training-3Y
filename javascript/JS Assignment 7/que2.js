const menu = {
    Pizza: 250,
    Burger: 120,
    Pasta: 180,
    Sandwich: 100
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (menu[item] === undefined) {
            throw new Error(item + " is not available in the menu");
        }
        return menu[item];
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    console.log("Total Bill:", calculateBill(["Pizza", "Burger", "Pasta"]));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Total Bill:", calculateBill(["Pizza", "Momos"]));
} catch (error) {
    console.log("Error:", error.message);
}