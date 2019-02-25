$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eatBurger = $(this).data("eatBurger");
      
      var eatBurgerStatus = {
        devoured: eatBurger
      };
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: eatBurgerStatus
      }).then(
        function() {
          console.log("changed sleep to", eatBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  