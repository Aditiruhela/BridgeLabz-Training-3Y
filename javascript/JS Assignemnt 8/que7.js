// Q7 - Promise.allSettled()

function loadProfile() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Profile Loaded")
                : reject("Profile Failed");
        }, 2000)
    );
}

function loadPosts() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Posts Loaded")
                : reject("Posts Failed");
        }, 1500)
    );
}

function loadMessages() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Messages Loaded")
                : reject("Messages Failed");
        }, 1000)
    );
}

const startTime = Date.now();

Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
]).then(results => {

    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });

    const endTime = Date.now();

    console.log("Total time:", endTime - startTime, "ms");
});