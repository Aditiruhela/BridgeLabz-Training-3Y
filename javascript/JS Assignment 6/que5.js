const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modalImage");

gallery.addEventListener("click", event => {
    if (event.target.tagName === "IMG") {
        modalImage.src = event.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

modalImage.addEventListener("click", event => {
    event.stopPropagation();
});