$(document).ready(function () {
    $("#search").keyup(function () {
        let value = $(this).val();
        $("#loading").show();

        // Search products using query parameter
        $.ajax({
            url: "http://localhost:3001/products?q=" + encodeURIComponent(value),
            method: "GET",
            success: function (products) {
                $("#loading").hide();
                $("#results").empty();

                if (products.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                products.forEach(function (product) {
                    $("#results").append(`
                        <article>
                            <img src="${product.image}" width="100" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>₹${product.price}</p>
                        </article>
                    `);
                });
            },
            error: function () {
                $("#loading").hide();
                $("#results").html("<p>Error loading products</p>");
            }
        });
    });
});