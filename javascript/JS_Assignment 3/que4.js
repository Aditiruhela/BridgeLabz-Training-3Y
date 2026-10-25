"use strict";

/*
Original error:
greeting = "Welcome";

In strict mode, assigning a value to an undeclared
variable throws ReferenceError.

Fix:
Declare greeting using let, const or var.
*/

function showMessage() {

    let greeting = "Welcome";

    // Add greeting to Watch in VS Code debugger
    console.log(greeting);
}

showMessage();

/*
Scope rule:
greeting is now declared inside showMessage(),
so it belongs to the function scope.

Call Stack:
Global -> showMessage() -> Global
*/