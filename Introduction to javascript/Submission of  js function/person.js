
"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);

    this.branch = branch;
}

// Inheritance
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Creating student object
const student1 = new Student("Alex", "Cyber Security");

// Calling methods
student1.showName();
student1.showBranch();

// Checking prototype chain
console.log(
    student1 instanceof Student
); // true

console.log(
    student1 instanceof Person
); // true
