function Order(orderId,orderDate,customerID,total,discount,orderDetails) {
    var __orderId = orderId;
    var __orderDate = orderDate;
    var __customerID = customerID;
    var __total = total;
    var __discount = discount;
    var __orderDetails = orderDetails;

    this.setOrderID=function (orderId) {
        __orderId=orderId;
    }
    this.getOrderID=function () {
        return __orderId;
    }
    this.setOrderDate=function (orderDate) {
        __orderDate=orderDate;
    }
    this.getOrderDate=function () {
        return __orderDate;
    }
    this.setCustomerId=function (customerId) {
        __customerID=customerId;
    }
    this.getCustomerId=function () {
        return __customerID;
    }
    this.setTotal=function (total) {
        __total=total;
    }
    this.getTotal=function () {
        return __total;
    }
    this.setDiscount=function (discount) {
        __discount=discount;
    }
    this.getDiscount=function () {
        return __discount;
    }
    this.setOrderDetails=function (orderDetails) {
        __orderDetails=orderDetails;
    }
    this.getOrderDetails=function () {
        return __orderDetails;
    }
}