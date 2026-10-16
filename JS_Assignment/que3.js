
/* Q3: Monthly Expense Tracker */

// Expenses for five categories
let expenses = [5000, 1500, 8000, 2000, 1000];

let total = 0;

// Calculate total expenses
for (let expense of expenses) {
    total += expense;
}

// Calculate average and tax
let average = total / expenses.length;
let tax = total * 0.10;

// Add 10% tax to the total
total += tax;

// Display results
console.log("Total Expenses: Rs. " + (total - tax).toFixed(2));
console.log("Average Expenses: Rs. " + average.toFixed(2));
console.log("Tax Amount: Rs. " + tax.toFixed(2));
console.log("Final Amount After Tax: Rs. " + total.toFixed(2));
