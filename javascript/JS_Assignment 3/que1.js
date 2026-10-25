"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {

    let value = apiData[i];

    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    // " ", "100px" and NaN values are treated as invalid
    if (
        Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "") ||
        value === "100px"
    ) {
        invalidNumbers.push(value);

        console.log(`INVALID DATA:
Original: ${value}
Number: ${numberValue}
Boolean: ${booleanValue}
String: ${stringValue}`);
    } else {
        validNumbers.push(numberValue);

        console.log(`VALID DATA:
Original: ${value}
Number: ${numberValue}
Boolean: ${booleanValue}
String: ${stringValue}`);
    }
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);