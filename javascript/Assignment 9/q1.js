$(document).ready(function () {

    // Greeting according to time
    let hour = new Date().getHours();

    if (hour < 12)
        $("#greeting").text("Good Morning!");
    else if (hour < 18)
        $("#greeting").text("Good Afternoon!");
    else
        $("#greeting").text("Good Evening!");

    $("#change").click(function () {
        $("#greeting").text("Believe in yourself and keep going!");
    });

    $("#toggle").click(function () {
        $("#welcome").toggle();
    });

    $("#greeting").click(function () {
        alert("Welcome to our website!");
    });
});