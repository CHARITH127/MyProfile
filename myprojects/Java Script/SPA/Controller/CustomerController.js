/*=================CRUD Operation start=========================================*/

/*add customer to the table*/
function loadAllCustomer() {
    $(".customerTableBody").empty();
    for (var i of CustomerDB) {
        var tableRow = `<tr><td>${i.getCustomerID()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerSalary()}</td></tr>`;
        $(".customerTableBody").append(tableRow);
    }
}

/*save customer on array */
function saveCustomer() {
    var customerID = $("#CustomerID").val();
    var customerName = $("#CustomerName").val();
    var customerAddress = $("#CustomerAddress").val();
    var customerSalary = $("#CustomerSalary").val();

    /*create Object*/
    var customerObject = new Customer(customerID, customerName, customerAddress, customerSalary);

    CustomerDB.push(customerObject);
}

/*search customer*/
function searchCustomer(id) {
    for (let i = 0; i < CustomerDB.length; i++) {
        if (CustomerDB[i].getCustomerID() == id) {
            return CustomerDB[i];
        }
    }
}

/*delete customer*/
function deleteCustomer(id) {
    for (let i = 0; i < CustomerDB.length; i++) {
        if (CustomerDB[i].getCustomerID() == id) {
            CustomerDB.splice(i, 1);
        }
    }
}

/*update customer*/
function updateCustomer() {
    var code = $("#CustomerSearch").val();

    var newCId = $("#searchCustomerID").val();
    var newCName = $("#searchCustomerName").val();
    var newCAddress = $("#searchCustomerAddress").val();
    var newCSalary = $("#searchCustomerSalary").val();

    var indexOfObject = CustomerDB.indexOf(searchCustomer(code));

    CustomerDB[indexOfObject].setCustomerID(newCId);
    CustomerDB[indexOfObject].setCustomerName(newCName);
    CustomerDB[indexOfObject].setCustomerAddress(newCAddress);
    CustomerDB[indexOfObject].setCustomerSalary(newCSalary);

    loadAllCustomer();
}

/*=================CRUD Operation End=========================================*/

/*================ customer page validation===========================*/
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

$("#CustomerID").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#CustomerID").val();
        if (cusIDRegEx.test(output)) {
            $("#CustomerID").css('border-color', '#04db14');
            $("#CustomerID").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerID").css('color', '#04db14');
            $("#lblcustomerID").text("");
            $("#CustomerName").focus();
        } else {
            $("#CustomerID").css('border-color', '#ff0202');
            $("#CustomerID").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerID").css('color', '#ff0202');
            $("#lblcustomerID").text("Cus ID is a required field : Pattern C00-000");
            $("#CustomerID").focus();
        }
    }
});
$("#CustomerName").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#CustomerName").val();
        if (cusNameRegEx.test(output)) {
            $("#CustomerName").css('border-color', '#04db14');
            $("#CustomerName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerName").css('color', '#04db14');
            $("#lblcustomerName").text("");
            $("#CustomerAddress").focus();
        } else {
            $("#CustomerName").css('border-color', '#ff0202');
            $("#CustomerName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerName").css('color', '#ff0202');
            $("#lblcustomerName").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            $("#CustomerName").focus();
        }
    }
});
$("#CustomerAddress").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#CustomerAddress").val();
        if (cusAddressRegEx.test(output)) {
            $("#CustomerAddress").css('border-color', '#04db14');
            $("#CustomerAddress").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerAddress").css('color', '#04db14');
            $("#lblcustomerAddress").text("");
            $("#CustomerSalary").focus();
        } else {
            $("#CustomerAddress").css('border-color', '#ff0202');
            $("#CustomerAddress").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerAddress").css('color', '#ff0202');
            $("#lblcustomerAddress").text("Cus Address is a required field : Mimum 7");
            $("#CustomerAddress").focus();
        }
    }
});
$("#CustomerSalary").keydown(function (e) {
    if (e.key == "Enter") {
        var output = $("#CustomerSalary").val();
        if (cusSalaryRegEx.test(output)) {
            $("#CustomerSalary").css('border-color', '#04db14');
            $("#CustomerSalary").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerSalary").css('color', '#04db14');
            $("#lblcustomerSalary").text("");
            $("#btn_AddCustomer").attr("disabled", false);
        } else {
            $("#CustomerSalary").css('border-color', '#ff0202');
            $("#CustomerSalary").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
            $("#CustomerSalary").css('color', '#ff0202');
            $("#lblcustomerSalary").text("Cus Salary is a required field : Pattern 100.00 or 100");
            $("#CustomerSalary").focus();
        }
    }
});