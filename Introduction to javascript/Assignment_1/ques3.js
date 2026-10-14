
let expenses = {
    food: 3000,
    travel: 1500,
    rent: 5000,
    bills: 1000,
    leisure: 1500
};

let total = 0;

// Add all expenses
for (let category in expenses) {
    total += expenses[category];
}

// Calculate average expense for 5 categories
let average = total / 5;

// Add 10% tax
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display results
console.log("Total Expense: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));
