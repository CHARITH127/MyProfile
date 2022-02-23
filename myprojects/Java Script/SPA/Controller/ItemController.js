/*==========================Item CRUD Operation start===================*/

/*Added data to the table*/
function loadAllItems() {
    $(".itemTableBody").empty();
    for (var i of ItemDB) {
        var tableRow = `<tr><td>${i.getItemCodeO()}</td><td>${i.getItemNameO()}</td><td>${i.getItemQuantityO()}</td><td>${i.getItemPriceO()}</td></tr>`;
        $(".itemTable").append(tableRow);
    }
}

/*save items to the array*/
function saveItem() {
    var itemCode = $("#ItemCode").val();
    var itemName = $("#ItemName").val();
    var itemQuantity = $("#ItemQuantity").val();
    var itemPrice = $("#ItemPrice").val();

    /*create Object*/

    var itemObject = new Item(itemCode,itemName,itemQuantity,itemPrice);

    /*var itemObject = {
        iCode: itemCode,
        iName: itemName,
        iQuantity: itemQuantity,
        iPrice: itemPrice
    };*/

    ItemDB.push(itemObject);
}

/*update items*/
function updateItem() {
    var code = $("#ItemSearch").val();

    var newICode = $("#searchItemCode").val();
    var newIName = $("#searchItemName").val();
    var newIQTY = $("#searchItemQuantity").val();
    var newIPrice = $("#searchItemPrice").val();

    var indexOfObject = ItemDB.indexOf(searchItem(code));

    ItemDB[indexOfObject].setItemNameO(newICode);
    ItemDB[indexOfObject].setItemNameO(newIName);
    ItemDB[indexOfObject].setItemQuantityO(newIQTY);
    ItemDB[indexOfObject].setItemPriceO(newIPrice);

    loadAllItems();

}

/*delete items*/
function deleteItems(id) {
    for (let i = 0; i < ItemDB.length; i++) {
        if (ItemDB[i].getItemCodeO() == id) {
            ItemDB.splice(i, 1);
        }
    }
}

/*search Item*/
function searchItem(id) {
    for (let i = 0; i < ItemDB.length; i++) {
        if (ItemDB[i].getItemCodeO() == id) {
            return ItemDB[i];
        }
    }
}

/*==========================Item CRUD Operation End===================*/

/*=================Text feild focusing and validation==============*/
var itemCodeRegx = /^[I][0]{2}[-][0-9]{3}$/;
var itemNameRegx = /^[A-z]{3,}\s[0-9]{0,}[A-z]{0,}$/;
var itemQtyRegx = /^[0-9]{1,4}$/;
var itemPriceRegx = /^[0-9]{1,}.[0-9]{2}$/;


$("#ItemCode").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#ItemCode").val();
        if (itemCodeRegx.test(output)) {
            $("#ItemCode").css('border-color', '#04db14');
            $("#ItemCode").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemCode").css('color', '#04db14');
            $("#lbleItemCode").text("");
            $("#ItemName").focus();
        } else {
            $("#ItemCode").css('border-color', '#ff0202');
            $("#ItemCode").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemCode").css('color', '#ff0202');
            $("#lbleItemCode").text("Item code is a required field : Pattern I00-000");
            $("#ItemCode").focus();
        }
    }
});
$("#ItemName").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#ItemName").val();
        if (itemNameRegx.test(output)) {
            $("#ItemName").css('border-color', '#04db14');
            $("#ItemName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemName").css('color', '#04db14');
            $("#lbleItemName").text("");
            $("#ItemQuantity").focus();
        } else {
            $("#ItemName").css('border-color', '#ff0202');
            $("#ItemName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemName").css('color', '#ff0202');
            $("#lbleItemName").text("Item name is a required field : Pattern Lux 74g");
            $("#ItemName").focus();
        }
    }
});
$("#ItemQuantity").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#ItemQuantity").val();
        if (itemQtyRegx.test(output)) {
            $("#ItemQuantity").css('border-color', '#04db14');
            $("#ItemQuantity").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemQuantity").css('color', '#04db14');
            $("#lbleItemQuantity").text("");
            $("#ItemPrice").focus();
        } else {
            $("#ItemQuantity").css('border-color', '#ff0202');
            $("#ItemQuantity").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemQuantity").css('color', '#ff0202');
            $("#lbleItemQuantity").text("Item quantity should be a number : 140");
            $("#ItemQuantity").focus();
        }
    }
});
$("#ItemPrice").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#ItemPrice").val();
        if (itemPriceRegx.test(output)) {
            $("#ItemPrice").css('border-color', '#04db14');
            $("#ItemPrice").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemPrice").css('color', '#04db14');
            $("#lbleItemPrice").text("");
        } else {
            $("#ItemPrice").css('border-color', '#ff0202');
            $("#ItemPrice").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#ItemPrice").css('color', '#ff0202');
            $("#lbleItemPrice").text("Item price should be a number with two decimal places : 100.00");
            $("#ItemPrice").focus();
        }
    }
});

/*=====================End of the text validation==================*/

/*=============clear All the text field of item page===============*/
$("#clearAll").click(function () {
    clearAllSerchForm();
});

/*======================clear all the text fied===================*/
function clearAllSerchForm() {
    $("#searchItemCode").val("");
    $("#searchItemName").val("");
    $("#searchItemQuantity").val("");
    $("#searchItemPrice").val("");
}

function clearAllItemAdd() {
    $("#ItemCode").val("");
    $("#ItemName").val("");
    $("#ItemQuantity").val("");
    $("#ItemPrice").val("");
}