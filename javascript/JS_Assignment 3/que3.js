"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let transaction of transactions) {

    try {

        // Breakpoint can be placed here to watch transaction

        if (transaction === null) {
            throw new Error("Null entry");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing amount or id");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        valid.push(transaction);
        console.log("Valid:", transaction);

    } catch (error) {

        invalid.push({
            transaction: transaction,
            error: error.message
        });

        console.log("Error:", error.message);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);

console.log("Successful Transactions:", valid.length);
console.log("Failed Transactions:", invalid.length);