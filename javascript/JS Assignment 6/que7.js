const box = document.querySelector("#box");
const coordinates = document.querySelector("#coordinates");

box.addEventListener("mousemove", event => {
    coordinates.textContent =
        `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

box.addEventListener("dblclick", event => {
    const dot = document.createElement("div");
    const rect = box.getBoundingClientRect();

    dot.className = "dot";

    dot.style.left = event.clientX - rect.left - 5 + "px";
    dot.style.top = event.clientY - rect.top - 5 + "px";

    box.appendChild(dot);
});