$(function() {
  var findContacts = function(query) {
    $.ajax({
      url: "/contacts",
      type: 'get',
      data: { query: $(query).val() },
      dataType: 'json',
      success: function(data) {
        $("#results_block").empty();
        var search_results = data;
        if (search_results.length > 0) {
          for (var i=0; i<search_results.length; i++) {
            var contact_block = $("<div>").addClass("contact_block").data("contact-id", search_results[i].id).text(search_results[i].firstname + " " + search_results[i].lastname).appendTo("#results_block");
          }
        } else {
          var no_results_block = $("<div>").addClass("no_results_block").text("There are no results").appendTo("#results_block");
        }
      },
      error: function() {
        console.error("There was an error fetching all the contacts")
      }
    });
  }

  findContacts("#search_field");

  $("#search_field").on('keyup', function(){
    findContacts("#search_field")
  });
// ADD CONTACT //
  $("#add_contact").on("click", function(){
    $.ajax({
      url: "/contacts",
      type: "post",
      data: {
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        email: $("#email").val()
      },
      dataType: "json",
      success: function(data) {
        var new_contact = data;
        findContacts("#search_field");
      },
      error: function() {
        console.error("There was an error adding this contact to the database")
      }
    })
  });

// SELECT CONTACT //
  $(document).on("click", ".contact_block", function(e){
    var element = e.target;
    $(".contact_block").removeClass("selected");
    $(element).addClass("selected");
    $("#contact-edit").removeClass("hidden");
    var contact_id = $(element).data('contact-id');
    $("#contact-fullname").empty();
    $("#contact-email").empty();
    $.ajax({
      url: "/contact/" + contact_id,
      type: "get",
      dataType: "json",
      success: function(data) {
        var fullname = $("<p>").text(data.firstname + " " + data.lastname).appendTo("#contact-fullname");
        var email = $("<p>").text(data.email).appendTo("#contact-email");
        $("#contact-edit").data("contact-id", data.id);
      },
      error: function() {
        console.error("There was an error fetching details for this contact")
      }
    });
  });

// EDIT CONTACT //
  $("#contact-edit").on("click", function(e){
    var element = e.target;
    var contact_id = $(element).data('contact-id');
    $.ajax({
      url: "/contact/" + contact_id,
      type: "get",
      dataType: "json",
      success: function(data) {
        console.log("get! successful!")
        $("#edit-firstname").val(data.firstname)
        $("#edit-lastname").val(data.lastname)
        $("#edit-email").val(data.email)
      },
      error: function() {
        console.error("There was an error fetching details for this contact")
      }
    });
    $("#edit-form").removeClass("hidden");
    $("#contact-edit-done").data("contact-id", contact_id)
    $("#contact-delete").data("contact-id", contact_id)
    $("#contact-edit").addClass("hidden");

  })
// FINISH EDITING CONTACT //
  $("#contact-edit-done").on("click", function(){
    var contact_id = $(this).data("contact-id");
    $.ajax({
      url: "/contact/" + contact_id,
      type: "put",
      data: {
        firstname: $("#edit-firstname").val(),
        lastname: $("#edit-lastname").val(),
        email: $("#edit-email").val()
      },
      dataType: "json",
      success: function(data) {
        console.log("update successful!");
        $("#contact-fullname").empty();
        $("#contact-email").empty();
        var fullname = $("<p>").text(data.firstname + " " + data.lastname).appendTo("#contact-fullname");
        var email = $("<p>").text(data.email).appendTo("#contact-email");
        $("#edit-form").addClass("hidden");
        $("#contact-edit").removeClass("hidden");
        findContacts("#search_field");
      },
      error: function() {
        console.error("There was an error updating")
      }
    });
  })
// DELETE CONTACT //
  $("#contact-delete").on("click", function () {
    var contact_id = $(this).data("contact-id");
    if (confirm("are you sure you want to delete this contact?")) {
      $.ajax({
        url: "/contact/" + contact_id,
        type: "delete",
        success: function(data) {
          $("#contact-fullname").empty();
          $("#contact-email").empty();
          var deleted = $("<p>").text("This Contact Has Been Deleted!").appendTo("#contact-fullname");
          $("#edit-form").addClass("hidden");
          findContacts("#search_field");
        },
        error: function() {
          console.error("We have failed to delete this contact...")
        }
      })
    }
  });


});



