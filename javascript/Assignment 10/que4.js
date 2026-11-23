const baseURL = "http://localhost:3004";

Promise.all([
    fetch(baseURL + "/users"),
    fetch(baseURL + "/orders"),
    fetch(baseURL + "/products")
])
.then(function (responses) {
    responses.forEach(function (response) {
        if (!response.ok) throw new Error("API failed");
    });

    return Promise.all(responses.map(function (response) {
        return response.json();
    }));
})
.then(function (data) {
    document.getElementById("users").className = "";
    document.getElementById("orders").className = "";
    document.getElementById("products").className = "";

    document.getElementById("users").innerText = data[0].length;
    document.getElementById("orders").innerText = data[1].length;
    document.getElementById("products").innerText = data[2].length;
})
.catch(function () {
    document.getElementById("warning").innerText =
        "Some data could not be loaded.";
});