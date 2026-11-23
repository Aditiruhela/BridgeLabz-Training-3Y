$(document).ready(function () {

    $("#add").click(function () {
        $("#posts").append('<article class="post">New Blog Post</article>');
    });

    $("#featured").click(function () {
        $("#posts").prepend('<article class="post">Featured Post</article>');
    });

    $("#remove").click(function () {
        $(".post").last().remove();
    });

    $("#tags").click(function () {
        $(".post").first().before("<p>Featured:</p>");
        $(".post").first().after("<p>#Programming</p>");
    });

    $("#highlight").click(function () {
        $(".post").each(function () {
            if ($(this).text().includes("JavaScript")) {
                $(this).css("background", "yellow");
            }
        });
    });
});