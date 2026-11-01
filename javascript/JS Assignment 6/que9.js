const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const success = document.querySelector("#success");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    if (
        emailInput.value.trim() === "" ||
        !emailInput.value.includes("@")
    ) {
        emailError.textContent = "Enter valid email";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", event => {
    event.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (nameValid && emailValid && passwordValid) {
        success.textContent = "Form Submitted Successfully";
    } else {
        success.textContent = "";
    }
});