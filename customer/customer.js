let customers = [];

function saveCustomer() {
    const id = document.getElementById("customerId").value;
    const name = document.getElementById("customerName").value;
    const address = document.getElementById("customerAddress").value;
    const tel = document.getElementById("customerTel").value;

    if (id && name && address && tel) {
        const existingCustomer = customers.find(cust => cust.id === id);
        if (existingCustomer) {
            alert("Customer with this ID already exists. Please use a unique ID.");
            return;
        }

        const customer = { id, name, address, tel };
        customers.push(customer);
        alert("Customer saved successfully!");
        displayCustomers();
        clearForm();
    } else {
        alert("Please fill out all fields!");
    }
}

function updateCustomer() {
    const id = document.getElementById("customerId").value;
    const name = document.getElementById("customerName").value;
    const address = document.getElementById("customerAddress").value;
    const tel = document.getElementById("customerTel").value;

    const index = customers.findIndex(cust => cust.id === id);
    if (index !== -1) {
        customers[index] = { id, name, address, tel };
        alert("Customer updated successfully!");
        displayCustomers();
        clearForm();
    } else {
        alert("Customer ID not found.");
    }
}

function deleteCustomer() {
    const id = document.getElementById("customerId").value;
    const index = customers.findIndex(cust => cust.id === id);
    if (index !== -1) {
        customers.splice(index, 1);
        alert("Customer deleted successfully!");
        displayCustomers();
        clearForm();
    } else {
        alert("Customer ID not found.");
    }
}

function clearForm() {
    document.getElementById("customerId").value = "";
    document.getElementById("customerName").value = "";
    document.getElementById("customerAddress").value = "";
    document.getElementById("customerTel").value = "";
}

function displayCustomers() {
    const customerList = document.getElementById("customerList");
    customerList.innerHTML = "";  // Clear existing list

    customers.forEach(customer => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${customer.id}, Name: ${customer.name}, Address: ${customer.address}, Tel: ${customer.tel}`;
        customerList.appendChild(listItem);
    });
}