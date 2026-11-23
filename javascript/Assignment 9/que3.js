$(document).ready(function () {

    $(".answer").hide();

    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    $(".question").hover(function () {
        $(this).css("color", "blue");
    }, function () {
        $(this).css("color", "black");
    });

    $(".question").dblclick(function () {
        $(".answer").hide();
    });

    $(".answerInput").focus(function () {
        $(this).parent().css("background-color", "lightyellow");
    });

    $(".answerInput").blur(function () {
        $(this).parent().css("background-color", "white");
    });
});