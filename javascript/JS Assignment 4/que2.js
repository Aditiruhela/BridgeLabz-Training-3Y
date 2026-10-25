const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    validate(name, nameRegex, "nameError", "Only alphabets allowed");
    validate(email, emailRegex, "emailError", "Invalid email");
    validate(phone, phoneRegex, "phoneError", "Phone must contain 10 digits");
    validate(password, passwordRegex, "passwordError",
        "Password needs uppercase, number and special character");
});

function validate(input, regex, errorId, message) {
    const error = document.getElementById(errorId);

    if (!regex.test(input.value)) {
        input.className = "error";
        error.textContent = message;
    } else {
        input.className = "valid";
        error.textContent = "";
    }
}