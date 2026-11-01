const productInput = document.querySelector("#productInput");
const addBtn = document.querySelector("#addBtn");
const productList = document.querySelector("#productList");

addBtn.addEventListener("click", () => {
    if (productInput.value.trim() === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${productInput.value}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

productList.addEventListener("click", (event) => {
    const li = event.target.closest("li");

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {
        const span = li.querySelector("span");

        span.setAttribute("contenteditable", "true");
        span.focus();
    }
});

document.addEventListener("click", (event) => {
    document.querySelectorAll("[contenteditable='true']").forEach(span => {
        if (!span.parentElement.contains(event.target)) {
            span.setAttribute("contenteditable", "false");
        }
    });
});