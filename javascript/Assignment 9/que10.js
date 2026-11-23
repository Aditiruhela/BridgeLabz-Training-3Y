$(document).ready(function () {

    $("#registration").submit(function (event) {

        event.preventDefault();

        let valid = true;

        // Reset previous errors
        $("input").css("border", "1px solid black");

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Demo list for uniqueness check
        let existingEmails = [
            "admin@gmail.com",
            "student@gmail.com"
        ];

        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        if (!emailPattern.test(email) ||
            existingEmails.includes(email)) {

            $("#email").css("border", "2px solid red");
            valid = false;
        }

        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        if (valid) {
            $("#message")
                .text("Registration Successful!")
                .css("color", "green");
        } else {
            $("#message")
                .text("Please correct the invalid fields.")
                .css("color", "red");
        }
    });
});