class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 50000),
    new Employee(2, "Sara", "HR", 40000),
    new Employee(3, "Kiran", "IT", 60000),
    new Employee(4, "Rahul", "Sales", 45000),
    new Employee(5, "Neha", "Finance", 55000)
];

employees.forEach(employee => {
    console.log(
        `${employee.name}: Annual Salary = ₹${employee.getAnnualSalary()}`
    );
});

const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", totalAnnualPayout);

employees[0].applyBonus(10);

console.log(
    "Amit salary after bonus:",
    employees[0].salary
);