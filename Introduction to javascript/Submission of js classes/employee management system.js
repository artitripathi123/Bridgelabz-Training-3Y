
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Finance", 40000),
    new Employee(4, "Priya", "Marketing", 35000),
    new Employee(5, "Karan", "IT", 45000)
];

// Apply 10% bonus to each employee
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Display annual salary
employees.forEach(employee => {
    console.log(
        `${employee.name}: ₹${employee.getAnnualSalary()}`
    );
});

// Calculate total annual payout
const totalPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Company Payout: ₹" + totalPayout);
