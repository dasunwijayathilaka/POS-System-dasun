
export default class CustomerModel {
    constructor(id, first_name, last_name, address, mobile) {
        this._id=id;
        this._first_name=first_name;
        this._last_name=last_name;
        this._address=address;
        this._mobile=mobile;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id=id;
    }

    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get mobile() {
        return this._mobile;
    }

    set mobile(value) {
        this._mobile = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}