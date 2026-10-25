const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

function displayUser() {
    document.getElementById("userDetails").innerHTML = `
        <h3>User Details</h3>
        Name: ${user.name}<br>
        Email: ${user.email}<br>
        Age: ${user.age}
    `;
}

displayUser();

document.getElementById("userForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        user.name = nameInput.value;
        user.email = emailInput.value;
        user.age = Number(ageInput.value);

        displayUser();

        console.log(user);
    });