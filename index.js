$(function () {



    $.get("data/customers.json", function (data, status) {

        $("#customers").append(data.length);
    });
    $.get("data/products.json", function (data, status) {

        $("#products").append(data.length);
    });
    $.get("data/suppliers.json", function (data, status) {

        $("#suppliers").append(data.length);
    });
    $.get("data/orders.json", function (data, status) {

        $("#orders").append(data.length);
    });

});