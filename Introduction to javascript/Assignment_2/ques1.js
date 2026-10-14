
 // Global variable
let bonus = 5000;

function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary += bonus;
    }

    // Print total salary
    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary: ₹" + salary);
}

// Call the function
calculateSalary();

// Change the global bonus
bonus = 7000;

console.log("Updated Global Bonus: ₹" + bonus);

// Call again to see the updated bonus
calculateSalary();
