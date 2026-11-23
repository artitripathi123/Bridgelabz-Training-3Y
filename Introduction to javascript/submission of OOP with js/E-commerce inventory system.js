let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 3 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 20 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500, stock: 4 },
    { id: 5, name: "Book", category: "Education", price: 500, stock: 15 }
];

// 1. Get low stock products using filter()
function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

// 2. Sort products by price using sort()
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value using reduce()
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category using reduce()
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

// Testing all functions
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted By Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("Products Grouped By Category:");
console.log(groupByCategory());