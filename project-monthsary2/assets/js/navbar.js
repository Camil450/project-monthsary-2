

 // Function to fetch and display the page content
 function loadPageContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(content => {
        document.getElementById('page-content').innerHTML = content;

        new DataTable('#product-registry, #stocks, #sales', {
    columnDefs: [
        {
            targets: [0],
            orderData: [0, 1]
        },
        {
            targets: [1],
            orderData: [1, 0]
        },
        {
            targets: [4],
            orderData: [4, 0]
        }
    ]
});

  $("#select-all").on("click", function() {
        // Get its current checked status
        var isChecked = $(this).prop("checked");
        
        // Set all checkboxes with the class "checkbox-item" to the same checked status
        $(".checkbox-item").prop("checked", isChecked); // Use class selector
    });
    
    // When any checkbox with class "checkbox-item" is clicked
    $(".checkbox-item").on("click", function() {
        // Check if all checkboxes with class "checkbox-item" are checked
        var allChecked = $(".checkbox-item:checked").length === $(".checkbox-item").length;
        
        // Update the "Select All" checkbox's status
        $("#select-all").prop("checked", allChecked);
    });

    })
    .catch(error => {
        console.error('Error fetching the page:', error);
    });
}

        // Wait for the document to be ready
        document.addEventListener("DOMContentLoaded", function() {
            // Get all the navigation links with the class "custom-link"
            var navLinks = document.querySelectorAll("#custom-link");

            // Loop through each navigation link and attach a click event listener
            navLinks.forEach(function(link) {
                link.addEventListener("click", function(event) {
                    // Prevent the default link behavior (e.g., navigating to another page)
                    event.preventDefault();

                    // Get the data-target attribute value (URL of the page to load)
                    var targetPageUrl = link.getAttribute("data-target");

                    // Load the page content
                    loadPageContent(targetPageUrl);
                });
            });
        });

        // Load the default page content when the page loads (e.g., page1.html)
        loadPageContent("components/dashboard/dashboard.php")