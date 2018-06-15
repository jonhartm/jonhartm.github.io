$(document).ready(function() {

  // each time the key is pressed in the search box, filter the results by the term
  $("#search_term").keyup(function() {
    var search_type = $("#search_type").val();
    $(".search-container").each(function() {
      var search_text = $(this).find("." + search_type).text()
      if (search_text.toLowerCase().includes($("#search_term").val().toLowerCase())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  });
})
