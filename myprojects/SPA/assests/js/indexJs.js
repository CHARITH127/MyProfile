/*================ loading context according to the selected item of the nav bar =====================================*/

/* nav home*/
$("#home").click(function () {
    $("#itemManage").css("display", "none");
    $("#customerManage").css("display", "none");
    $("#orderManagement").css("display", "none");
    $("#orderInvoice").css("display", "block");
});

/*nav Order*/
$("#order").click(function () {
    $("#itemManage").css("display", "none");
    $("#orderInvoice").css("display", "none");
    $("#customerManage").css("display", "none");
    $("#orderManagement").css("display", "block");
})

/*nav Items*/
$("#item").click(function () {
    $("#orderInvoice").css("display", "none");
    $("#customerManage").css("display", "none");
    $("#orderManagement").css("display", "none");
    $("#itemManage").css("display", "block");

});

/*nav Customer*/
$("#customer").click(function () {
    $("#orderInvoice").css("display", "none");
    $("#itemManage").css("display", "none");
    $("#orderManagement").css("display", "none");
    $("#customerManage").css("display", "block");

});

/*================Order Page Event Start===========================*/
/*================Order Page Event End===========================*/

/*================Item Page Event Start===========================*/
/*save item butten*/
$("#btn_AddNewItem").click(function () {
    saveItem();
    loadAllItems();
    clearAllItemAdd();
});

/*search butten*/
$("#searchButten").click(function () {
    var searchCode = $("#ItemSearch").val();
    var response = searchItem(searchCode);
    if (response) {
        $("#searchItemCode").val(response.iCode);
        $("#searchItemName").val(response.iName);
        $("#searchItemQuantity").val(response.iQuantity);
        $("#searchItemPrice").val(response.iPrice);
    } else {
        alert("Not such a Item in here");
    }
});

/*delete butten*/
$("#deleteItem").click(function () {
    if (confirm("Are you sure to delete this item..?")) {
        var searchCode = $("#ItemSearch").val();
        deleteItems(searchCode);
        loadAllItems();
        clearAllSerchForm();
    }

});

/*update butten*/
$("#update").click(function () {
    if (updateItem()) {

    }else {
        alert("Successfully updated");
    }
});

/*================Item Page Event End===========================*/




/*================Customer Page Event Satart===========================*/

/* btn save Customer */
$("#btn_AddCustomer").click(function () {
    saveCustomer();
    loadAllCustomer();
    clearAddCustomer();
});

/* btn search customer */
$("#btnSearchCustomer").click(function () {
    var code = $("#CustomerSearch").val();
    var resp = searchCustomer(code);
    $("#searchCustomerID").val(resp.cId);
    $("#searchCustomerName").val(resp.cName);
    $("#searchCustomerAddress").val(resp.cAddress);
    $("#searchCustomerSalary").val(resp.cSalary);
});

/* btn delete customer*/
$("#deleteCustomer").click(function () {
    var code = $("#CustomerSearch").val();
    if (confirm("Are you sure to delete this item..?")) {
        deleteCustomer(code);
        loadAllCustomer();
    }
});
/* btn update customer*/
$("#updateCustomer").click(function () {
    updateCustomer();
});

/*clear all customer search*/
$("#clearAllCustomer").click(function () {
    clearSearchCustomer();
});

/*clear add customer text field*/
function clearAddCustomer(){
    $("#CustomerID").val("");
    $("#CustomerName").val("");
    $("#CustomerAddress").val("");
    $("#CustomerSalary").val("");
}

/*clear search customer text field*/
function clearSearchCustomer(){
    $("#searchCustomerID").val("");
    $("#searchCustomerName").val("");
    $("#searchCustomerAddress").val("");
    $("#searchCustomerSalary").val("");
}

