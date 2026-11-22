"use strict";

// Employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Calculate bonus for every employee
for (let i = 0; i < employees.length; i++) {

    try {

        const employee = employees[i];

        // Validate employee object
        if (!employee) {
            throw new Error("Employee data is missing");
        }

        // Convert salary and years into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate converted values
        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or years");
        }

        if (salary < 0 || years < 0) {
            throw new Error("Salary and years cannot be negative");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        // Calculate total salary
        const totalSalary = salary + bonus;

        // Print employee details
        console.log("\n===== EMPLOYEE DETAILS =====");

        console.log(`Name: ${employee.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);

    } catch (error) {

        console.log("Error:", error.message);

    }
}