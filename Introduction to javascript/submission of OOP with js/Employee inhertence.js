class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing employee work.");
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team.");
    }
}

// Creating objects
let emp = new Employee("Rahul", "IT");
let manager = new Manager("Priya", "HR");

// Runtime polymorphism
emp.work();
manager.work();