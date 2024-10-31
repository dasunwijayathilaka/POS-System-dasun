import CustomerModel from "../models/customerModel.js";
import {customer_array, item_array, order_array} from "../db/database.js";

// selected customer for update or delete
let selected_customer_index = null;

// Select row in the table
let selectedRowIndex = '';

let custID = 1;

// generate new customer ID
$('#id').val(customer_array.length+1);

// Regex
const validateMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
}


// hide update button on customer add screen
$('#customer_update_btn').hide();
// Clear form fields
const clearFields = () => {
    $("#id").val('');
    $("#firstName").val('');
    $("#lastName").val('');
    $("#address").val('');
    $("#mobile").val('');
    generateNewCusId();
    $('#customer_save_btn').show();
    $('#customer_update_btn').hide();
    selectedRowIndex = -1;
};

// Generate new customer ID
const generateNewCusId = () => {

    if (customer_array.length === 0) {
        custID = 1;
        $('#id').val(custID);
    } else {
        // methana karanne customer array eke thiyena anthima object eke id eka aragena eekata ekak ekathu karna eka
        custID = customer_array[customer_array.length-1]._id+1;
        $('#id').val(custID);
    }

}

// Load customer table
const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr><td>${item.id}</td><td>${item.first_name}</td><td>${item.last_name}</td><td>${item.address}</td><td>${item.mobile}</td></tr>`
        $("#customerTableBody").append(data);
    })
}


// Clear fields button
$("#customer_clear_btn").on("click", function () {
    clearFields();
});

// Save customer and load table
$("#customer_save_btn").on("click", function (event) {
    event.preventDefault();

    let first_name = $('#firstName').val(); // empty
    let last_name = $('#lastName').val(); // empty
    let mobile = $('#mobile').val(); // empty, format
    let address = $('#address').val(); // empty

    if(first_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid First Name",
        });
    } else if(last_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Last Name",
        });
    } else if(!validateMobile(mobile)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Mobile",
        });
    } else if(address.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Address",
        });
    } else {

        let customer = new CustomerModel(
            // customer_array.length + 1,
            custID,
            first_name,
            last_name,
            address,
            mobile
        );

        customer_array.push(customer);
        loadCustomerTable();
        clearFields();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Customer has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Update selected customer
$("#customer_update_btn").on("click", function () {

    let index = selected_customer_index;

    let first_name = $('#firstName').val();
    let last_name = $('#lastName').val();
    let address = $('#address').val();
    let mobile = $('#mobile').val();

    if(first_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid First Name",
        });
    } else if(last_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Last Name",
        });
    } else if(!validateMobile(mobile)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Mobile",
        });
    } else if(address.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Address",
        });
    } else {

        let customer = new CustomerModel(
            customer_array[index].id,
            first_name,
            last_name,
            address,
            mobile
        );

        // update item
        customer_array[selected_customer_index] = customer;

        // clean customer form
        clearFields();

        // reload the table
        loadCustomerTable();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Customer update successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Delete customer
$("#customer_delete_btn").on('click', function () {

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
            customer_array.splice(selected_customer_index, 1);

            // clean customer form
            clearFields();

            // reload the table
            loadCustomerTable();
            // ==========================================================

            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your customer has been deleted.",
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
$('#customerTableBody').on('click', 'tr', function () {
    $('#customer_update_btn').show();
    $('#customer_save_btn').hide();

    // get tr index
    let index = $(this).index();

    selected_customer_index = $(this).index();

    // get customer object by index
    let customer_obj = customer_array[index];

    // get customer's data
    let id = customer_obj._id;
    let first_name = customer_obj.first_name;
    let last_name = customer_obj.last_name;
    let mobile = customer_obj.mobile;
    let address = customer_obj.address;

    // fill data into the form
    $('#firstName').val(first_name);
    $('#lastName').val(last_name);
    $('#mobile').val(mobile);
    $('#address').val(address);
    $('#id').val(id);

});

