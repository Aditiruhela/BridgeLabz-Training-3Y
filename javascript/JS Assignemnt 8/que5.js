// Q5 - Avoiding Callback Hell

function stage(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
}

// Callback Hell
stage("Design", () => {
    stage("Build", () => {
        stage("Test", () => {
            stage("Deploy", () => {
                stage("Celebrate", () => {
                    console.log("Callback pipeline completed");
                });
            });
        });
    });
});

// Async/Await version
function asyncStage(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    await asyncStage("Design");
    await asyncStage("Build");
    await asyncStage("Test");
    await asyncStage("Deploy");
    await asyncStage("Celebrate");

    console.log("Async pipeline completed");
}

runPipeline();

// async/await makes asynchronous code look sequential,
// avoiding deeply nested callbacks and improving readability.