
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;

let salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Increase salary by the given percentage
    salary += salary * incrementRate / 100;

    // Round salary to the nearest rupee
    salary = Math.round(salary);

    // Save yearly salary in the report
    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

// Display the 5-year projection
console.table(salaryReport);
