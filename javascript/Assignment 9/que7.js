$(document).ready(function () {

    // Filter courses on every key press
    $("#search").keyup(function () {

        let value = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function () {

            let matched = $(this).text().toLowerCase().includes(value);

            $(this).toggle(matched);

            if (matched) {
                $(this).css("background", "yellow");
                count++;
            } else {
                $(this).css("background", "white");
            }
        });

        $("#count").text(count);
    });

    $("#clear").click(function () {
        $("#search").val("");
        $(".course").show().css("background", "white");
        $("#count").text($(".course").length);
    });
});