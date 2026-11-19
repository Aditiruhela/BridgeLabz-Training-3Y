// Q3 - Callback to Promise Migration

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailure = Math.random() < 0.3;

            if (apiFailure) {
                reject("Failed to fetch bugs");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(error => {
        console.log("Error:", error);
    });