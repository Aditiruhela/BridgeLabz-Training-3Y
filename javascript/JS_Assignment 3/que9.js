"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanArray = [];

for (let i = 0; i < rawData.length; i++) {

    try {

        // Breakpoint can be placed here to watch control flow
        let data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        data.age = Number(data.age);

        if (Number.isNaN(data.age)) {
            throw new Error("Invalid age");
        }

        // Filter under-18 users
        if (data.age >= 18) {
            cleanArray.push(data);
        }

        console.log(`Line ${i + 1}: Valid`);

    } catch (error) {

        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean Array:", cleanArray);