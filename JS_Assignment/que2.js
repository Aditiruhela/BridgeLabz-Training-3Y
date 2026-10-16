
/* Q2: Multi-Type Data Summary */

// Declare variables of different data types
let userName = "Aditi";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let student = { name: "Aditi", age: 20 };
let address = null;
let result;

// Store labels, values, and types in an array
let data = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: student, Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

// Display the complete report
console.table(data);
