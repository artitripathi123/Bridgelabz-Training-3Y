class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount!");
        }

        this.#balance += amount;
        console.log("Amount deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Invalid withdrawal amount!");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;
        console.log("Amount withdrawn:", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

// Creating bank account
let account = new BankAccount(5000);

// Valid deposit
account.deposit(2000);
console.log("Balance:", account.getBalance());

// Valid withdrawal
account.withdraw(1000);
console.log("Balance:", account.getBalance());

// Invalid withdrawal
try {
    account.withdraw(10000);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Final Balance:", account.getBalance());