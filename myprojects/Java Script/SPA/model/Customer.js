function Customer(customerId,customerName,customerAddress,customerSalary) {
   var __cusstomerId=customerId;
   var __cusstomerName=customerName;
   var __cusstomerAddress=customerAddress;
   var __cusstomerSalary=customerSalary;

   this.setCustomerID = function (customerId) {
       __cusstomerId=customerId;
   }
   this.getCustomerID = function () {
       return __cusstomerId;
   }
   this.setCustomerName = function (customerName) {
       __cusstomerName=customerName;
   }
   this.getCustomerName =function () {
       return __cusstomerName
   }
    this.setCustomerAddress = function (customerAddress) {
        __cusstomerAddress=customerAddress;
    }
    this.getCustomerAddress =function () {
        return __cusstomerAddress
    }
    this.setCustomerSalary = function (customerSalary) {
        __cusstomerSalary=customerSalary;
    }
    this.getCustomerSalary =function () {
        return __cusstomerSalary;
    }
}