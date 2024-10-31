export default class OrderModel{
    constructor(oid , cid , iid , qty , unitprice , tot) {
        this._oid = oid;
        this._cid = cid;
        this._iid = iid;
        this._qty = qty;
        this._unitprice = unitprice;
        this._tot = tot;
    }

    get oid() {
        return this._oid;
    }

    set oid(value) {
        this._oid = value;
    }

    get cid() {
        return this._cid;
    }

    set cid(value) {
        this._cid = value;
    }

    get iid() {
        return this._iid;
    }

    set iid(value) {
        this._iid = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get unitprice() {
        return this._unitprice;
    }

    set unitprice(value) {
        this._unitprice = value;
    }

    get tot() {
        return this._tot;
    }

    set tot(value) {
        this._tot = value;
    }
}