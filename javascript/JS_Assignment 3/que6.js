"use strict";

let input = prompt("Enter pyramid limit:");

let limit = Number(input) || 5;

// Using let
for (let i = 1; i <= limit; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}


// Using var
for (var x = 1; x <= limit; x++) {

    var row2 = "";

    for (var y = 1; y <= x; y++) {
        row2 += "* ";
    }

    console.log(row2);
}

/*
let creates block-scoped loop variables.
var creates function/global-scoped variables.

Add i, j, x and y to Watch while debugging
to observe variable re-use.

Strict mode catches undeclared loop variables.
*/