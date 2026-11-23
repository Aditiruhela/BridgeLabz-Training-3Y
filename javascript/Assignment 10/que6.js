const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Check whether the email already exists before POST
    axios.get(
        "http://localhost:3006/users?email=" + encodeURIComponent(email)
    )
    .then(function (response) {
        if (response.data.length > 0) {
            message.innerText = "Email already registered.";
            return null;
        }

        return axios.post("http://localhost:3006/users", {
            name: name,
            email: email
        });
    })
    .then(function (response) {
        if (response) {
            message.innerText = "Registration successful!";
            form.reset();
        }
    })
    .catch(function () {
        message.innerText = "Registration failed.";
    });
});