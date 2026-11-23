$(document).ready(function () {

    $("#hide").click(function () {
        $(".banner").hide();
    });

    $("#show").click(function () {
        $(".banner").show();
    });

    $("#slide").click(function () {
        $(".banner").slideToggle();
    });

    $("#fadeOut").click(function () {
        $(".banner").fadeOut();
    });

    $("#fadeIn").click(function () {
        $(".banner").fadeIn();
    });

    // Automatically rotate banners
    let index = 0;
    $(".banner").hide().eq(0).show();

    setInterval(function () {
        $(".banner").eq(index).fadeOut(function () {
            index = (index + 1) % $(".banner").length;
            $(".banner").eq(index).fadeIn();
        });
    }, 5000);
});