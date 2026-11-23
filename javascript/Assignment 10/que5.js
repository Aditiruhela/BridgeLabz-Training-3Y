const day = document.getElementById("day");
const container = document.getElementById("classes");

function loadTimetable() {
    const selectedDay = day.value;

    fetch("http://localhost:3005/timetable?day=" + encodeURIComponent(selectedDay))
    .then(function (response) {
        return response.json();
    })
    .then(function (classes) {
        container.innerHTML = "";

        if (classes.length === 0) {
            container.innerHTML = "<p>No classes today.</p>";
            return;
        }

        classes.forEach(function (item) {
            container.innerHTML += `
                <article>
                    <h3>${item.subject}</h3>
                    <p>Faculty: ${item.faculty}</p>
                    <p>Time: ${item.time}</p>
                </article>
            `;
        });
    });
}

day.addEventListener("change", loadTimetable);
loadTimetable();