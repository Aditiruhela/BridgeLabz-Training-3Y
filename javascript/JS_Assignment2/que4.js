let scores = [];

for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let copiedScores = scores.map(score => score);

let highestScore = Math.max(...copiedScores);
let lowestScore = Math.min(...copiedScores);

let total = copiedScores.reduce((sum, score) => sum + score, 0);
let average = total / copiedScores.length;

let passedStudents = copiedScores.filter(score => score >= 50).length;

console.log(`
Scores: ${copiedScores.join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${average.toFixed(2)}
Students Passed: ${passedStudents}
`);