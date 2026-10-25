/*
WITHOUT STRICT MODE

function demo(a, a) {
    total = 10;
    delete total;
}

demo(5, 10);

Duplicate parameters are allowed in normal mode.
total becomes an implicit global variable.
delete total is allowed in non-strict mode.
*/


/*
WITH STRICT MODE

"use strict";

function demo(a, a) {
    total = 10;
    delete total;
}

This gives SyntaxError because:

1. Duplicate parameter names are not allowed.
2. Undeclared variables are not allowed.
3. Deleting variables using delete is not allowed.
*/


// Correct ES6 version

"use strict";

function demo(a, b) {

    let total = 10;

    console.log("a:", a);
    console.log("b:", b);
    console.log("total:", total);
}

demo(5, 10);