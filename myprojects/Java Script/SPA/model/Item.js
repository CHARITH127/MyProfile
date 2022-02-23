function Item(itemCode, itemName, itemQuantity, itemPrice) {
    var __itemCode = itemCode;
    var __itemName = itemName;
    var __itemQuantity = itemQuantity;
    var __itemPrice = itemPrice;

    this.setItemCodeO = function (itemCode) {
        __itemCode = itemCode;
    }

    this.getItemCodeO = function () {
        return __itemCode;
    }

    this.setItemNameO = function (itemName) {
        __itemName = itemName;
    }
    this.getItemNameO = function () {
        return __itemName;
    }
    this.setItemQuantityO = function (itemQuantity) {
        __itemQuantity = itemQuantity;
    }
    this.getItemQuantityO = function () {
        return __itemQuantity;
    }
    this.setItemPriceO = function (itemPrice) {
        __itemPrice = itemPrice;
    }
    this.getItemPriceO = function () {
        return __itemPrice;
    }
}