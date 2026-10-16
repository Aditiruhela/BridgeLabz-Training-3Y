
/* Q8: Employee Salary Projection */

let currentSalary = 50000;
let incrementRate = 10;
let salary = currentSalary;

let salaryDetails = [];

// Calculate salary for the next five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    salaryDetails.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Display yearly salary projection
console.table(salaryDetails);
