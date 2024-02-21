
let button = document.getElementById('add_update_item');
let nameInput = document.getElementById('name');
let priceInput = document.getElementById('price');
let quantityInput = document.getElementById('quantity');
let table = document.getElementById('cart-items');


button.addEventListener('click', function() {
    //get values from input fields
    let name = nameInput.value;
    let price = priceInput.value;
    let quantity = quantityInput.value;
    //replace spaces with underscores
    let id = name.replace(/ /g, '_');

    //insert row into table
    let row = table.insertRow(-1);
    row.id = id;

    //declare button with class decrease, increase, and delete
let decreaseButtons = document.createElement('button');
decreaseButtons.className = 'decrease';
decreaseButtons.textContent = '-';
decreaseButtons.addEventListener('click', function() {
    let quantityCell = row.cells[2];
     let totalCell = row.cells[3];
    let quantity = parseFloat(quantityCell.textContent);

    //debugging
    console.log("type of quantity" + typeof quantityCell.textContent    );
   

    if (quantity > 1) {
        quantityCell.textContent = quantity - 1;
        totalCell.textContent = price * (quantity - 1);
    }
});

let increaseButtons = document.createElement('button');
increaseButtons.className = 'increase';
increaseButtons.textContent = '+';
increaseButtons.addEventListener('click', function() {
    let quantityCell = row.cells[2];
    let totalCell = row.cells[3];
    let quantity = parseFloat(quantityCell.textContent);
    quantityCell.textContent = quantity + 1;
    totalCell.textContent = price * (quantity + 1);
});

let deleteButtons = document.createElement('button');
deleteButtons.className = 'delete';
deleteButtons.textContent = 'x';
deleteButtons.addEventListener('click', function() {
    table.deleteRow(row.rowIndex);
});




    // Insert cells into the row
    let nameCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let quantityCell = row.insertCell(2);
    let totalCell = row.insertCell(3);
    let decreaseCell = row.insertCell(4);
    let increaseCell = row.insertCell(5);
    let deleteCell = row.insertCell(6);

    // Set the text of the cells
    nameCell.textContent = name;
    priceCell.textContent = price;
    quantityCell.textContent = quantity;
    totalCell.textContent = price * quantity;
    decreaseCell.appendChild(decreaseButtons);
    increaseCell.appendChild(increaseButtons);
    deleteCell.appendChild(deleteButtons);


    updateSubtotal();
});


//add event listener to all buttons


function updateSubtotal() {
let allButtons = document.querySelectorAll('button');
allButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let subtotal = document.getElementById('subtotal');
        let subtotalvalue = 0; // initialize subtotal value

        let taxes = document.getElementById('taxes');
        let grandTotal = document.getElementById('grand_total');

        console.log(table.childNodes.length);
        
        for(let i=1; i< table.rows.length; i++) {

            let totalvalue = parseFloat(table.rows[i].cells[3].textContent);
            subtotalvalue += totalvalue;
        }

        subtotal.textContent = subtotalvalue;

        let taxvalue = subtotalvalue * 0.13;
        taxes.textContent = taxvalue;

        let grandTotalvalue = subtotalvalue + taxvalue;
        grandTotal.textContent = grandTotalvalue;



    });
});
}
