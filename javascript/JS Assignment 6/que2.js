const text = document.querySelector("#text");
const counter = document.querySelector("#counter");
const reset = document.querySelector("#reset");

text.addEventListener("input", () => {
    const remaining = 100 - text.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.classList.remove("yellow", "red");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("yellow");
    }

    if (remaining === 0) {
        counter.classList.add("red");
    }
});

text.addEventListener("keydown", (event) => {
    if (
        text.value.length >= 100 &&
        event.key.length === 1 &&
        !event.ctrlKey
    ) {
        event.preventDefault();
    }
});

reset.addEventListener("click", () => {
    text.value = "";
    counter.textContent = "100 characters remaining";
    counter.classList.remove("yellow", "red");
});