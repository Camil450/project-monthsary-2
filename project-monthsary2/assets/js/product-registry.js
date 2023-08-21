$(document).ready(function(){
	load_products()

// When the "Select All" checkbox is clicked
    $("#select-all").on("click", function() {
        // Get its current checked status
        var isChecked = $(this).prop("checked");
        
        // Set all checkboxes with the class "checkbox-item" to the same checked status
        $(".checkbox-item").prop("checked", isChecked);
    });
    
    // When any checkbox with class "checkbox-item" is clicked
    $(".checkbox-item").on("click", function() {
        // Check if all checkboxes with class "checkbox-item" are checked
        var allChecked = $(".checkbox-item:checked").length === $(".checkbox-item").length;
        
        // Update the "Select All" checkbox's status
        $("#select-all").prop("checked", allChecked);
    });
});

function load_products(){
	$("#product-modal").load("components/modals/product-registry/product-modal.php");
};