$(document).ready(function(){
 load_stocks()
 // options

});

function load_stocks(){
	$("#stocks-modal").load("components/modals/stocks/stockModal.php");

};


// Functions to calculate

 function calculate() {
      const quantity = parseFloat(document.getElementById("quantity").value);
      const pricePerUnit = parseFloat(document.getElementById("price-per-unit").value);

      if (isNaN(quantity) || isNaN(pricePerUnit)) {
        alert("Please enter valid numbers for quantity and price per unit!");
        return;
       
      }

        const subtotal = quantity * pricePerUnit;
      // const total = calculateTotal(subtotal);

      document.getElementById("subtotal").value = `₱${subtotal.toFixed(2)}`;
      // document.getElementById("total").value = `$${total.toFixed(2)}`;
      alert("Inventory successfully update/added.");
      return;



    }

    // function calculateTotal(subtotal) {
    //   const taxRate = 0.00; // Assuming a sales tax rate of 8%
    //   return subtotal + subtotal * taxRate;
    // }

    // Archive stocks
    function archivedStocksBtn(){
      const archived = window.confirm('Are you sure you want to archived this stocks?');

      if (archived){
         $('#archivedStocks').modal('hide');
      }else{
        window.alert('Archived Cancel.');
      }
    }

