
/* Q4: Academic Performance Evaluator */

// Marks in five subjects, each out of 100
let marks = [90, 85, 88, 92, 80];

let total = 0;
let failed = false;

// Calculate total and check passing marks
for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        failed = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Display academic results
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Evaluate promotion criteria
if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !failed) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
