function PersonPrototype(name) {
    this.name = name;
}

PersonPrototype.prototype.showName = function () {
    console.log(this.name);
};

function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}

StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;

StudentPrototype.prototype.showBranch = function () {
    console.log(this.branch);
};

const student1 = new StudentPrototype("Divyanshu", "CSE");

student1.showName();
student1.showBranch();


class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(this.branch);
    }
}

const student2 = new Student("Divyanshu", "CSE");

student2.showName();
student2.showBranch();