const search = document.querySelector("#search");
const rows = document.querySelectorAll("#studentTable tr");
const noResult = document.querySelector("#noResult");

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    let found = false;

    rows.forEach(row => {
        const data = row.textContent.toLowerCase();

        if (data.includes(value)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    noResult.style.display = found ? "none" : "block";
});