// Version 1 - carousel and widget highlighting
jq1(function () {

    jq1(".slide").hide();
    jq1(".slide").first().show();

    let index = 0;

    setInterval(function () {
        jq1(".slide").eq(index).hide();

        index = (index + 1) % jq1(".slide").length;

        jq1(".slide").eq(index).show();
    }, 2000);

    jq1(".widget").click(function () {
        jq1(".widget").css("background", "white");
        jq1(this).css("background", "lightblue");
    });
});

// Version 2 - modal and tooltips
jq2(function () {

    jq2("#notification").click(function () {
        jq2("#modal").fadeIn();
    });

    jq2("#close").click(function () {
        jq2("#modal").fadeOut();
    });

    jq2(".widget").hover(function () {
        jq2(this).attr("title", "This is " + jq2(this).text());
    });
});