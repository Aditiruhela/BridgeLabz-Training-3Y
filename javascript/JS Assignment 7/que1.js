class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 80) return "A";
        else if (avg >= 60) return "B";
        else if (avg >= 40) return "C";
        else return "F";
    }
}

let s1 = new Student("Aman", [80, 90, 85]);
let s2 = new Student("Riya", [65, 70, 60]);
let s3 = new Student("Rahul", [35, 40, 30]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());