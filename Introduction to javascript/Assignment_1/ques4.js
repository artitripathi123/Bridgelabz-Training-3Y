
let marks = [90, 85, 88, 92, 80];

let total = 0;
let detainedDueToLowMarks = false;

// Calculate total and check minimum marks
for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        detainedDueToLowMarks = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Decide academic result
if (detainedDueToLowMarks || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !detainedDueToLowMarks) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
