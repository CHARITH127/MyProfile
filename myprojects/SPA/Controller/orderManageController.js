
/*======================== Order Manage Event Start============================*/

$("#btnsearchOrder").click(function () {
    var code = $("#searchOrder").val();
    loadOrderDetails(code);
});

/*======================== Order Manage Event End============================*/

/*search order*/
function searchOrder(code) {
    for (let i = 0; i < OrderDB.length; i++) {
        if (OrderDB[i].getOrderID() == code) {
            return OrderDB[i];
        }
    }
}

/*load order details to the table*/
function loadOrderDetails(code) {
    $(".manageOrderTableBody").empty();
    var orderDtails = searchOrder(code).getOrderDetails();
    for (var od of orderDtails) {
        var tableRow = `<tr><td>${od.getItemCodeOD()}</td><td>${od.getItemNameOD()}</td><td>${od.getItemPriceOD()}</td><td>${od.getItemQtyOD()}</td><td>${od.getItemTotalOD()}</td></tr>`;
        $(".manageOrderTable").append(tableRow);
    }
}
