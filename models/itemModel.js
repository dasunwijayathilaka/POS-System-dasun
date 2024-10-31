export default class ItemModel {
    constructor(itemId, itemName, itemUnitPrice, itemQtyOnHand) {
        this._itemId = itemId;
        this._itemName = itemName;
        this._itemUnitPrice = itemUnitPrice;
        this._itemQtyOnHand = itemQtyOnHand;
    }


    get itemId() {
        return this._itemId;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get itemUnitPrice() {
        return this._itemUnitPrice;
    }

    set itemUnitPrice(value) {
        this._itemUnitPrice = value;
    }

    get itemQtyOnHand() {
        return this._itemQtyOnHand;
    }

    set itemQtyOnHand(value) {
        this._itemQtyOnHand = value;
    }
}