"use strict";

/*
Hoisting:

score -> hoisted and initialized with undefined
announce -> complete function is hoisted
status -> hoisted but remains in Temporal Dead Zone
startGame -> complete function is hoisted

Original output:
undefined
Game started
ready
*/

console.log(score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}


// Fixed version

var fixedScore = 50;
let fixedStatus = "ready";

function fixedAnnounce() {
    console.log("Game started");
}

function fixedStartGame() {
    console.log(fixedStatus);
}

console.log(fixedScore);
fixedAnnounce();
fixedStartGame();


// Arrow function version
// Arrow functions are not callable before their declaration.

const arrowAnnounce = () => {
    console.log("Game started");
};

const arrowStartGame = () => {
    console.log(fixedStatus);
};

arrowAnnounce();
arrowStartGame();