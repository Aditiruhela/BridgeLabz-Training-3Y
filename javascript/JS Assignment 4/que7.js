const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameRegex = /^.{5,}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    const message = document.getElementById("message");

    if (!usernameRegex.test(username)) {
        message.textContent = "Username must contain at least 5 characters";
        return;
    }

    if (!passwordRegex.test(password)) {
        message.textContent =
            "Password must have 8 characters, uppercase, lowercase, number and special character";
        return;
    }

    message.textContent = "Login successful";
});