"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let employee of employees) {

    try {
        // Check missing properties
        if (!employee.name || employee.salary == null || employee.years == null) {
            throw new Error("Missing employee property");
        }

        let salary = Number(employee.salary);
        let years = Number(employee.years);

        // Check conversion
        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Invalid number conversion");
        }

        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        console.log(
            `Name: ${employee.name}, Salary: ${salary}, Years: ${years}, Bonus: ${bonus}`
        );

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}