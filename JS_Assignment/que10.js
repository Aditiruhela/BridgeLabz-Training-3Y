
/* Q10: Citizen Eligibility Validator */

let age = 22;
let isCitizen = true;

// Check age and citizenship
if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
