const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");
const backButtons = document.querySelectorAll(".back");

let currentStep = 0;

function showStep(index) {
    steps.forEach(step => step.style.display = "none");
    steps[index].style.display = "block";
}

nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = steps[currentStep].querySelector("input");

        if (!input.checkValidity() || input.value.trim() === "") {
            input.reportValidity();
            return;
        }

        if (currentStep === 1 && !input.value.includes("@")) {
            alert("Enter valid email");
            return;
        }

        currentStep++;
        showStep(currentStep);
    });
});

backButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentStep--;
        showStep(currentStep);
    });
});

document.querySelector("#submit").addEventListener("click", () => {
    const password = document.querySelector("#password");

    if (password.value.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    steps[currentStep].style.display = "none";

    document.querySelector("#summary").innerHTML = `
        <h2>Summary</h2>
        <p>Name: ${document.querySelector("#name").value}</p>
        <p>Email: ${document.querySelector("#email").value}</p>
        <p>Password: ${document.querySelector("#password").value}</p>
    `;
});