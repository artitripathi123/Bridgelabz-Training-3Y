
let purchaseAmount = 7500;
let discountPercentage = 0;

// Decide discount based on purchase amount
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount and final price
let discountAmount = purchaseAmount * discountPercentage / 100;
let finalPrice = Math.round(purchaseAmount - discountAmount);

console.log("Original Total: ₹" + purchaseAmount);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + Math.round(discountAmount));
console.log("Final Price: ₹" + finalPrice);
