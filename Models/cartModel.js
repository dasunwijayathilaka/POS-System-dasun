export default class CartModel {
    constructor(itemId, itemName, qty, unitPrice, total) {
        this._itemId = itemId;
        this._itemName = itemName;
        this._qty = qty;
        this._unitPrice = unitPrice;
        this._total = total;
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

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}