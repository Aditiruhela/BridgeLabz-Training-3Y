// Q9 - Debugging the Event Loop

/*
Predicted Output:

Script start
Script end
Promise callback
Timeout callback
*/

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

/*
Synchronous statements execute first.

Promise.then() is placed in the microtask queue.
setTimeout() is placed in the macrotask queue.

After synchronous code completes, the event loop processes
microtasks before macrotasks.

Therefore, the Promise callback executes before setTimeout.
*/