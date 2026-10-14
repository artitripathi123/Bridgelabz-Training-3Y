
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart total
let originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

// Apply category-wise discounts
for (let product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    let finalPrice = product.price * (1 - discountRate);
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: ₹${product.price} -> ₹${finalPrice.toFixed(2)}`
    );
}

// Apply extra discount if original cart value exceeds 50000
if (originalTotal > 50000) {
    discountedTotal *= 0.95;
}

console.log("Original Cart Total: ₹" + originalTotal.toFixed(2));
console.log("Final Cart Total: ₹" + discountedTotal.toFixed(2));
