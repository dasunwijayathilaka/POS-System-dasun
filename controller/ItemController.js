import ItemModel from "../models/itemModel.js";
import {customer_array, item_array, order_array} from "../db/database.js";

// selected item for update or delete
let selected_item_index = null;

// Select row in the table
let selectedRowIndex = '';

let itemID = 1;

// generate new item ID
$('#itemId').val(item_array.length+1);

// QtyOnHand Regex
const validateQtyOnHand = (itemQtyOnHand) => {
    const qtyOnHandRegex = /^\d+$/;
    return qtyOnHandRegex.test(itemQtyOnHand);
}

// Unit price Regex
const validateUnitPrice = (itemUnitPrice) => {
    const unitPriceRegex = /^\d+(\.\d{1,2})?$/;
    return unitPriceRegex.test(itemUnitPrice);
}

// hide update button on item add screen
$('#item_update_btn').hide();

// Clear form fields
const clearFields = () => {
    $("#itemId").val('');
    $("#itemName").val('');
    $("#itemUnitPrice").val('');
    $("#itemQtyOnHand").val('');
    generateNewItemId();
    $('#item_save_btn').show();
    $('#item_update_btn').hide();
    selectedRowIndex = -1;
};

// Generate new item ID
const generateNewItemId = () => {

    if (item_array.length === 0) {
        itemID = 1;
        $('#itemId').val(itemID);
    } else {
        // methana karanne item array eke thiyena anthima object eke id eka aragena eekata ekak ekathu karna eka
        itemID = item_array[item_array.length-1]._itemId+1;
        $('#itemId').val(itemID);
    }

}

// Load item table
const loadItemTable = () => {
    $("#itemTableBody").empty();
    item_array.map((itm, ) => {
        console.log(itm);
        let data = `<tr><td>${itm._itemId}</td><td>${itm._itemName}</td><td>${itm._itemUnitPrice}</td><td>${itm._itemQtyOnHand}</td></tr>`
        $("#itemTableBody").append(data);
    });
}

// Clear fields button
$("#item_clear_btn").on("click", function () {
    clearFields();
});

// Save item and load table
$("#item_save_btn").on("click", function (event) {
    event.preventDefault();

    let itemName = $('#itemName').val(); // empty
    let itemUnitPrice = $('#itemUnitPrice').val(); // empty
    let itemQtyOnHand = $('#itemQtyOnHand').val(); // empty, format

    if(itemName.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Item Name!",
        });
    } else if(!validateUnitPrice(itemUnitPrice)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please enter unit price field numbers only!",
        });
    } else if(!validateQtyOnHand(itemQtyOnHand)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please enter QTY on hand field numbers only!",
        });
    } else {

        let item = new ItemModel(
            itemID,
            itemName,
            itemUnitPrice,
            itemQtyOnHand
        );

        item_array.push(item);
        loadItemTable();
        clearFields();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Update selected item
$("#item_update_btn").on("click", function () {

    let index = selected_item_index;

    let itemName = $('#itemName').val();
    let itemUnitPrice = $('#itemUnitPrice').val();
    let itemQtyOnHand = $('#itemQtyOnHand').val();

    if(itemName.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Item Name!",
        });
    } else if(!validateUnitPrice(itemUnitPrice)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please enter unit price field numbers only!",
        });
    } else if(!validateQtyOnHand(itemQtyOnHand)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please enter QTY on hand field numbers only!",
        });
    } else {

        let item = new ItemModel(
            item_array[index]._itemId,
            itemName,
            itemUnitPrice,
            itemQtyOnHand
        );

        // update item
        item_array[selected_item_index] = item;

        // clean item form
        clearFields();

        // reload the table
        loadItemTable();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item update successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Delete item
$("#item_delete_btn").on('click', function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            // when pressing confirm button
            item_array.splice(selected_item_index, 1);

            // clean item form
            clearFields();

            // reload the table
            loadItemTable();
            // ==========================================================

            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });

});

// table row load to field
$('#itemTableBody').on('click', 'tr', function () {
    $('#item_update_btn').show();
    $('#item_save_btn').hide();

    // get tr index
    let index = $(this).index();

    selected_item_index = $(this).index();

    // get item object by index
    let item_obj = item_array[index];

    // get item's data
    let id = item_obj._itemId;
    let name = item_obj._itemName;
    let unitPrice = item_obj._itemUnitPrice;
    let qtyOnHand = item_obj._itemQtyOnHand;

    // fill data into the form
    $('#itemId').val(id);
    $('#itemName').val(name);
    $('#itemUnitPrice').val(unitPrice);
    $('#itemQtyOnHand').val(qtyOnHand);

});

