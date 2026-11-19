// Q2 - Microtask vs Macrotask

console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

console.log("Synchronous task");

console.log("End");

// Synchronous code executes first.
// Promise callbacks are microtasks, so they execute before
// setTimeout callbacks, which are macrotasks.