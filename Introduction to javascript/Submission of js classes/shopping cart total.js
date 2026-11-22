
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(10|20|30)$/;

        if (!couponRegex.test(coupon)) {
            console.log("Invalid Coupon Code!");
            return this.getTotal();
        }

        const discountPercent = Number(
            coupon.match(/\d+$/)[0]
        );

        const total = this.getTotal();

        const discount = total * discountPercent / 100;

        const finalTotal = total - discount;

        console.log("Original Total: ₹" + total);
        console.log("Discount: " + discountPercent + "%");
        console.log("Discount Amount: ₹" + discount);
        console.log("Final Total: ₹" + finalTotal);

        return finalTotal;
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Shopping Cart:", cart.items);

console.log("Total Amount: ₹" + cart.getTotal());

cart.applyCoupon("SAVE20");
