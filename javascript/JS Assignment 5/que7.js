function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);

console.log(triple(5));

console.log("The returned function remembers the multiplier value even after makeMultiplier has finished executing. This is called closure.");