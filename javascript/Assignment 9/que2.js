$(document).ready(function () {

    $(".details").hide();

    // Highlight clicked product
    $(".product").click(function () {
        $(this).css("background-color", "lightblue");

        if ($(this).data("stock") === "no")
            alert("Product is out of stock!");
    });

    $(".product").hover(function () {
        $(this).find(".details").show();
    }, function () {
        $(this).find(".details").hide();
    });

    $(".product").dblclick(function () {
        $(this).toggleClass("selected");
    });

    $("[data-discount='yes']").css("color", "green");
});