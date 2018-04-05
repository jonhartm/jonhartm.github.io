$(document).ready(function() {
  $(".fa-bars").click(function() {
    $("#nav-bar").toggle("blind", 200);
  });

  // set the FA icons for large views
  if ($(window).width() > 480) {
    $(".fa-github, .fa-envelope").addClass("fa-2x");
  }
});
