function orderDetails(itemCode,itemName,itemPrice,itemQuantity,itemTotal) {
    var __ODItemCode = itemCode;
    var __ODItemName = itemName;
    var __ODItemPrice = itemPrice;
    var __ODItemQTy = itemQuantity;
    var __ODItemTotal = itemTotal;

    this.setItemCodeOD = function (itemCode) {
        __ODItemCode=itemCode;
    }
    this.getItemCodeOD = function () {
        return __ODItemCode;
    }

    this.setItemNameOD = function (itemName) {
        __ODItemName=itemName;
    }
    this.getItemNameOD = function () {
        return __ODItemName;
    }
    this.setItemPriceOD = function (itemPrice) {
        __ODItemPrice=itemPrice;
    }
    this.getItemPriceOD = function () {
        return __ODItemPrice;
    }
    this.setItemQtyOD = function (itemQTY) {
        __ODItemQTy=itemQTY;
    }
    this.getItemQtyOD = function () {
        return __ODItemQTy;
    }
    this.setItemTotalOD = function (itemTotal) {
        __ODItemTotal=itemTotal;
    }
    this.getItemTotalOD = function () {
        return __ODItemTotal;
    }
}