// let itemArray = [];
//
// // Load items in the table
// const loadItemTable = () => {
//     $("#itemTableBody").empty(); // Clear existing rows
//
//     itemArray.forEach((item, index) => {
//         let data = `
//             <tr>
//                 <td>${item.id}</td>
//                 <td>${item.name}</td>
//                 <td>${item.price}</td>
//                 <td>${item.qty}</td>
//                 <td>
//                     <button class="btn btn-warning btn-sm" onclick="editItem(${index})">Edit</button>
//                     <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>
//                 </td>
//             </tr>
//         `;
//         $("#itemTableBody").append(data);
//     });
// };
//
// // Clear input fields
// const clearInputs = () => {
//     $("#txtItemID").val('');
//     $("#txtItemName").val('');
//     $("#txtItemQtyOnHand").val('');
//     $("#txtItemUnitPrice").val('');
// };
//
// $("#btnItemClear").on("click", function (event) {
//     $("#txtItemID").val('');
//     $("#txtItemName").val('');
//     $("#txtItemQtyOnHand").val('');
//     $("#txtItemUnitPrice").val('');
//
//     $("#btnItemSave").show();
//     $("#btnItemUpdate").hide();
// });
//
// // Save a new item
// $("#btnItemSave").on("click", function (event) {
//     event.preventDefault();
//
//     let id = $("#txtItemID").val();
//     let name = $("#txtItemName").val();
//     let qty = $("#txtItemQtyOnHand").val();
//     let price = $("#txtItemUnitPrice").val();
//
//     let item = { id, name, qty, price };
//     itemArray.push(item);
//
//     loadItemTable();
//     clearInputs();
// });
//
// // Delete an item
// const deleteItem = (index) => {
//     itemArray.splice(index, 1); // Remove item at the given index
//     loadItemTable(); // Refresh table
// };
//
// // Edit an item
// const editItem = (index) => {
//     let item = itemArray[index];
//     $("#txtItemID").val(item.id);
//     $("#txtItemName").val(item.name);
//     $("#txtItemQtyOnHand").val(item.qty);
//     $("#txtItemUnitPrice").val(item.price);
//
//     // Show update button and hide save button
//     $("#btnItemSave").hide();
//     $("#btnItemUpdate").show().off("click").on("click", function () {
//         itemArray[index] = {
//             id: $("#txtItemID").val(),
//             name: $("#txtItemName").val(),
//             qty: $("#txtItemQtyOnHand").val(),
//             price: $("#txtItemUnitPrice").val()
//         };
//
//         loadItemTable();
//         clearInputs();
//         $("#btnItemSave").show();
//         $("#btnItemUpdate").hide();
//     });
// };
//
// // Initialize: Hide 'Update' button on load
// $(document).ready(function () {
//     $("#btnItemUpdate").hide();
// });
