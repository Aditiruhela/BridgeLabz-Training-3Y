
/* Q7: Smart Guessing Game */

// Generate a random number from 1 to 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess
let userGuess = 25;

console.log("Secret Number: " + secretNumber);
console.log("Your Guess: " + userGuess);

// Compare the guess with the secret number
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 of the secret number
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
