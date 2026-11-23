$(document).ready(function () {

    function topicClick() {
        $("#message").html("<p>Topic selected successfully!</p>");
    }

    // Event works for dynamically added topics
    $("#topics").on("click", ".topic", topicClick);

    $("#subscribe").click(function () {
        $("#message").html("<p>Notifications enabled!</p>");
    });

    $("#unsubscribe").click(function () {
        $("#message").html("<p>Notifications disabled!</p>");
    });

    $("#add").click(function () {
        $("#topics").append('<button class="topic">New Topic</button>');
    });

    $("#remove").click(function () {
        $("#topics").off("click", ".topic", topicClick);
        $("#message").html("<p>Topic click event removed!</p>");
    });
});
