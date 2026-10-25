const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = Number(document.getElementById("seats").value);

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        console.log("Invalid name");
        return;
    }

    if (!emailRegex.test(email)) {
        console.log("Invalid email");
        return;
    }

    if (seats < 1 || seats > 10) {
        console.log("Seats must be between 1 and 10");
        return;
    }

    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    console.log(booking);

    document.getElementById("result").innerHTML =
        `Name: ${booking.name}<br>
         Email: ${booking.email}<br>
         Seats: ${booking.seats}`;
});