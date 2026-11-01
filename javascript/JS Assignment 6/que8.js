const dropdown = document.querySelector("#dropdown");
const dropdownButton = document.querySelector("#dropdownButton");
const options = document.querySelector("#options");

dropdownButton.addEventListener("click", () => {
    options.style.display =
        options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", event => {
    dropdownButton.textContent = event.target.textContent;
    options.style.display = "none";
});

document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }
}, true);