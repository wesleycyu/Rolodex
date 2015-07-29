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
      }
    });
  }

  findContacts("#search_field");

  $("#search_field").on('keyup', function(){
    findContacts("#search_field")
  });

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
      }
    })
  });

  $(document).on("click", ".contact_block", function(e){
    var element = e.target;
    $(".contact_block").removeClass("selected");
    $(element).addClass("selected");
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

      }
    });
  });

  $("#contact-edit").on("click", function(e){
    var element = e.target;
    var contact_id = $(element).data('contact-id');
    $("#edit-form").removeClass("hidden");
    $("#contact-edit").addClass("hidden");
  })



});



