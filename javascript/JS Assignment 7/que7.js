class BankAccount {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);

account.deposit(500);
console.log("Balance:", account.getBalance());

try {
    account.withdraw(3000);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Balance:", account.getBalance());