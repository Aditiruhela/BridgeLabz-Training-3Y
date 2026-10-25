"use strict";

function outer() {

    /*
    count is hoisted inside outer()
    and initialized with undefined.
    */

    console.log(count); // undefined

    var count = 5;

    function inner() {

        /*
        A separate count variable is hoisted inside inner().
        Therefore, inner count does not use outer count.
        */

        console.log(count); // undefined

        var count = 10;
    }

    inner();
}

outer();

/*
Output:
undefined
undefined

Separate memory contexts:

outer() -> count = undefined, then 5
inner() -> count = undefined, then 10

Call Stack:
Global
-> outer()
-> inner()
-> outer()
-> Global
*/


// Arrow function version

function arrowOuter() {

    console.log(count); // undefined

    var count = 5;

    const inner = () => {

        console.log(count); // undefined

        var count = 10;
    };

    inner();
}

arrowOuter();

/*
Changing inner() to an arrow function does not change
the local var hoisting behavior here.

The local count is still hoisted inside the arrow function.
*/