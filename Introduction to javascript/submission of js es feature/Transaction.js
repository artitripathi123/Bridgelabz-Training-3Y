"use strict";

// Transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store results
const validTransactions = [];
const invalidTransactions = [];

// Custom validation error
class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.name = "TransactionError";
        this.type = type;
    }
}

// Validate each transaction
for (let i = 0; i < transactions.length; i++) {

    try {

        // Debug breakpoint can be placed here
        const transaction = transactions[i];

        // Check null transaction
        if (transaction === null) {
            throw new TransactionError(
                "Transaction is null",
                "NULL_ENTRY"
            );
        }

        // Check missing id
        if (transaction.id === undefined) {
            throw new TransactionError(
                "Transaction ID is missing",
                "MISSING_ID"
            );
        }

        // Check missing amount
        if (transaction.amount === undefined) {
            throw new TransactionError(
                "Transaction amount is missing",
                "MISSING_AMOUNT"
            );
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new TransactionError(
                "Negative transaction amount",
                "NEGATIVE_AMOUNT"
            );
        }

        // Valid transaction
        validTransactions.push(transaction);

        console.log("Valid Transaction:", transaction);

    } catch (error) {

        // Store error details
        invalidTransactions.push({
            index: i,
            type: error.type || "UNKNOWN_ERROR",
            message: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

// Final report
console.log("\n===== TRANSACTION REPORT =====");

console.log("Valid Transactions:", validTransactions.length);
console.log("Invalid Transactions:", invalidTransactions.length);

console.log("\nValid Data:");
console.log(validTransactions);

console.log("\nInvalid Data:");
console.log(invalidTransactions);

// Categorized error report
console.log("\n===== ERROR CATEGORIES =====");

for (let i = 0; i < invalidTransactions.length; i++) {

    const error = invalidTransactions[i];

    console.log(
        `Index ${error.index}: ${error.type} - ${error.message}`
    );
}