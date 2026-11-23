$(document).ready(function () {

    $(".contact").hide();

    $(".manager").click(function () {
        $(this).siblings(".employee").css("background", "lightblue");
    });

    $(".employee").hover(function () {
        $(this).next(".contact").show();
    }, function () {
        $(this).next(".contact").hide();
    });

    $(".dept").click(function () {
        $(this).parent().children(".team").css("background", "lightyellow");
    });

    $("#random").click(function () {
        let employees = $(".employee");
        let random = Math.floor(Math.random() * employees.length);

        employees.eq(random).siblings(".employee")
            .css("background", "lightgreen");
    });

    $(".collapse").click(function () {
        $(this).parent().find(".team").toggle();
    });
});