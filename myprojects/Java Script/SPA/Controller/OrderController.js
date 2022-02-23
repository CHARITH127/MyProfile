/*set Order Id*/
function setOrderId() {
    if (Object.values(OrderDB).length !== OrderDB.length) {
        return "O00 - 1";
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
    } else {
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

    /*remove the selected item of the cart*/
    $(".cartTableBody>tr").click(function () {
        if (confirm("Are you sure to delete this item..?")) {
            var row = $(this).closest("tr");
            var itemID = row.find("td:eq(0)").text();
            var itemQty = parseInt(row.find("td:eq(3)").text());
            for (let i = 0; i < ItemDB.length; i++) {
                if (ItemDB[i].getItemCodeO() == itemID) {
                    var oldQty = ItemDB[i].getItemQuantityO();
                    oldQty+=itemQty;
                    ItemDB[i].setItemQuantityO(oldQty);
                    for (let i = 0; i < CartDB.length; i++) {
                        if (CartDB[i].getItemID() == itemID) {
                            CartDB.splice(i, 1);
                        }
                    }
                }
            }
        }
        loadAllItemDetails();
    });

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
    } else {
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
    var preQty = itemObject.getItemQuantityO();
    var newQty = preQty - placedItemQty;
    itemObject.setItemQuantityO(newQty);

}

/*check QTYONHand availability*/
function checkTheItemQtyAvailability(code) {
    var itemObject = searchItem(code);
    var placedItemQty = parseInt($("#OrderQuantity").val());
    if (itemObject.getItemQuantityO() >= placedItemQty) {
        return true;
    } else {
        return false;
    }
}

/*set sub total*/
function setSubtotal(discount) {
    var total = parseInt($("#totalnumber").text());
    var subTotal = total - (total * discount / 100);

    $("#subTotalNumber").text(subTotal);

}

/*calculate the balance*/
function calculateBalance(cash) {
    var balance = cash - parseInt($("#subTotalNumber").text());
    $("#Balance").val(balance + " .00");
}

/*place a order*/
function placeOrder() {
    var setOrderID = $("#OrderID").val();
    var setOrderDate = $("#OrderDate").val();
    var setCustomerId = $("#OrderCustomerId").val();
    var setTotal = parseInt($("#subTotalNumber").text());
    var setDiscount = parseInt($("#Discount").text());
    var setOrderDetails = setOrderDetailsDO();
    var orderObject = new Order(setOrderID, setOrderDate, setCustomerId, setTotal, setDiscount, setOrderDetails);

    OrderDB.push(orderObject);
}

/*set Order Details*/
function setOrderDetailsDO() {
    var OrderDetailsDB = new Array();
    for (let i = 0; i < CartDB.length; i++) {
        var orderDetailsObject = new orderDetails(
            CartDB[i].getItemID(), CartDB[i].getItemName(), CartDB[i].getItemPrice(), CartDB[i].getItemQuantity(), CartDB[i].getItemTotal()
        );
        OrderDetailsDB.push(orderDetailsObject);
    }
    return OrderDetailsDB;
}

/*reset all input field*/
function clearAllOrderPage() {
    $("#OrderCustomerId").val(" ");
    $("#OrderCustomerName").val(" ");
    $("#OrderCustomerSalary").val(" ");
    $("#OrderCustomerAddress").val(" ");
    $("#OrderItemCode").val(" ");
    $("#OrderItemName").val(" ");
    $("#QtyOnHand").val(" ");
    $("#OrderItemPrice").val(" ");
    $("#OrderQuantity").val(" ");
    $("#totalnumber").text("");
    $("#subTotalNumber").text("");
    $("#cash").val(" ");
    $("#Discount").val(" ");
    $("#Balance").val(" ");
    $(".cartTableBody").empty();
}