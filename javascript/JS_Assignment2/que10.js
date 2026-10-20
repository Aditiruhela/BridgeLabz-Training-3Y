const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
    let department = departments[i][0];
    let score = departments[i][1];

    if (score >= 90) {
        console.log(department + ": Excellent");
    } else if (score >= 75 && score <= 89) {
        console.log(department + ": Good");
    } else if (score >= 60 && score <= 74) {
        console.log(department + ": Average");
    } else {
        console.log(department + ": Needs Improvement");
    }
}