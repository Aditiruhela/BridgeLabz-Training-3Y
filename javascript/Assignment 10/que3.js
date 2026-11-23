$(document).ready(function () {
    function loadTasks() {
        let filter = $("#filter").val();
        let url = "http://localhost:3003/tasks";

        // Add query parameters according to selected filter
        if (filter === "Completed") {
            url += "?completed=true";
        } else if (filter !== "all") {
            url += "?priority=" + encodeURIComponent(filter);
        }

        $.ajax({
            url: url,
            method: "GET",
            success: function (tasks) {
                $("#tasks").empty();

                tasks.forEach(function (task) {
                    $("#tasks").append(`
                        <article>
                            <input type="checkbox" class="taskCheck"
                                   data-id="${task.id}"
                                   ${task.completed ? "checked" : ""}>
                            ${task.title} - ${task.priority}
                        </article>
                    `);
                });
            }
        });
    }

    $("#filter").change(loadTasks);

    // Event delegation for task checkboxes
    $("#tasks").on("change", ".taskCheck", function () {
        let id = $(this).data("id");
        let completed = $(this).is(":checked");

        $.ajax({
            url: "http://localhost:3003/tasks/" + id,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: completed })
        });
    });

    loadTasks();
});