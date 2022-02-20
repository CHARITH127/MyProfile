/*=========================== Order Page Events start=====================*/

/*loading current Date */
d = new Date();
$("#OrderDate").val(d.toLocaleDateString());

/*set order ID*/
var orderId = setOrderId();
$("#OrderID").val("O00 - " + orderId);

/*load customer details to the order form*/
$("#OrderCustomerId").keydown(function (e) {
    var id = $("#OrderCustomerId").val();
    if (e.key == "Enter") {
        var Customer = searchCustomer(id);
        $("#OrderCustomerName").val(Customer.cName);
        $("#OrderCustomerAddress").val(Customer.cAddress);
        $("#OrderCustomerSalary").val(Customer.cSalary);
    }
})

/*load item details to the order form*/
$("#OrderItemCode").keydown(function (e) {
    var id = $("#OrderItemCode").val();
    if (e.key == "Enter") {
        var Item = searchItem(id);
        $("#OrderItemName").val(Item.iName);
        $("#QtyOnHand").val(Item.iQuantity);
        $("#OrderItemPrice").val(Item.iPrice);
        $("#OrderQuantity").focus();
    }
})

/*add items to the cart */
$("#addToCart").click(function () {
    var code = $("#OrderItemCode").val();
    if (isExistItem(code) != true) {
        addDetailsToTheCart();
        loadAllItemDetails();
    } else {
        itemIsExistOnCart();
    }
});

/*set subTotal according to the discount event*/
$("#Discount").keydown(function (e) {
    if (e.key == "Enter") {
        var discount = parseInt($("#Discount").val());
        setSubtotal(discount);
    }
});

/*calcuate balance event */
$("#cash").keydown(function (e) {
    if (e.key == "Enter") {
        var cash = parseInt($("#cash").val());
        calculateBalance(cash);
    }
});

/*purchase order event*/
$("#purchaseOrder").click(function () {
    placeOrder();
});

/*=========================== Order Page Events Ends=====================*/

/*set Order Id*/
function setOrderId() {
    if (Object.values(OrderDB).length !== OrderDB.length) {

    } else {
        return OrderDB.length + 1;
    }
}

/*add item details to the cart*/
function addDetailsToTheCart() {
    var selectItemCode = $("#OrderItemCode").val();
    var selectItemName = $("#OrderItemName").val();
    var selectItemPrice = $("#OrderItemPrice").val();
    var selectOrderQuantity = $("#OrderQuantity").val();
    var itemViseTotal = selectItemPrice * selectOrderQuantity;

    var cartObject = new CartTm();
    cartObject.setItemID(selectItemCode);
    cartObject.setItemName(selectItemName);
    cartObject.setItemPrice(selectItemPrice);
    cartObject.setItemQuantity(selectOrderQuantity);
    cartObject.setItemTotal(itemViseTotal);

    if (checkTheItemQtyAvailability(selectItemCode)) {
        CartDB.push(cartObject);
        setNetTotal();
        deductionOfItemQtyOnH(selectItemCode);
    }else {
        alert("You exead the maximum rate of the item quantity in store please recheck the item quantity.");
    }
}

/*load details to the cartTable*/
function loadAllItemDetails() {
    $(".cartTableBody").empty();
    for (var i of CartDB) {
        var tableRow = `<tr><td>${i.getItemID()}</td><td>${i.getItemName()}</td><td>${i.getItemPrice()}</td><td>${i.getItemQuantity()}</td><td>${i.getItemTotal()}</td></tr>`;
        $(".cartTableBody").append(tableRow);
    }
}

/*check weather item is already add it to the cart */
function itemIsExistOnCart() {
    var code = $("#OrderItemCode").val();

    if (checkTheItemQtyAvailability(code)) {
        for (let i = 0; i < CartDB.length; i++) {
            if (CartDB[i].getItemID() == code) {
                var selectOrderQuantity = $("#OrderQuantity").val();
                var selectItemPrice = $("#OrderItemPrice").val();
                var newQty = +CartDB[i].getItemQuantity() + +selectOrderQuantity;
                var newitemTotal = newQty * selectItemPrice
                CartDB[i].setItemQuantity(newQty);
                CartDB[i].setItemTotal(newitemTotal);
                loadAllItemDetails();
                setNetTotal();
                deductionOfItemQtyOnH(code);
            }
        }
    }else {
        alert("You exead the maximum rate of the item quantity in store please recheck the item quantity.");
    }
}

function isExistItem(code) {
    for (let i = 0; i < CartDB.length; i++) {
        if (CartDB[i].getItemID() == code) {
            return true;
        }
    }
}

/*set net total*/
function setNetTotal() {
    var netTotal = 0;
    for (let i = 0; i < CartDB.length; i++) {
        netTotal += CartDB[i].getItemTotal();
    }
    $("#totalnumber").text(netTotal + " .00");
}

/*deduction of Item Quantities*/
function deductionOfItemQtyOnH(code) {
    var placedItemQty = $("#OrderQuantity").val();
    var itemObject = searchItem(code);
    itemObject.iQuantity = itemObject.iQuantity - placedItemQty;
}

/*check QTYONHand availability*/
function checkTheItemQtyAvailability(code) {
    var itemObject = searchItem(code);
    var placedItemQty = $("#OrderQuantity").val();
    if (itemObject.iQuantity >= placedItemQty) {
        return true;
    }else {
        return false;
    }
}

/*set sub total*/
function setSubtotal(discount) {
    var total = parseInt($("#totalnumber").text());
    var subTotal =total-(total*discount/100);
    console.log(subTotal);
    $("#subTotalNumber").text(subTotal+" .00");

}

/*calculate the balance*/
function calculateBalance(cash) {
    var balance = cash - parseInt($("#subTotalNumber").text());
    $("#Balance").val(balance +" .00");
}

/*place a order*/
function placeOrder() {
    var setOrderID = $("#OrderID").val();
    var setOrderDate = $("#OrderDate").val();
    var setCustomerId = $("#OrderCustomerId").val();
    var setTotal = parseInt($("#subTotalNumber").text());
    var setDiscount = parseInt($("#Discount").text());
    var setOrderDetails = setOrderDetailsDO();
    var orderObject = new Order(setOrderID,setOrderDate,setCustomerId,setTotal,setDiscount,setOrderDetails);

    OrderDB.push(orderObject);
}

/*set Order Details*/
function setOrderDetailsDO() {
    for (let i = 0; i < CartDB.length; i++) {
        var orderDetailsObject = new orderDetails(
            CartDB[i].getItemID(),CartDB[i].getItemName(),CartDB[i].getItemPrice(),CartDB[i].getItemQuantity(),CartDB[i].getItemTotal()
        );
        OrderDetailsDB.push(orderDetailsObject);
    }
    return OrderDetailsDB;
}