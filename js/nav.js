// Script for the navigation menu.

$(document).ready(function() {
  // On mobile and table views, clicking the bars will show the nav menu
  $(".fa-bars").click(function() {
    $(".nav-bar").toggle("blind", 200);
  });

  // set the FA icons for large views
  if ($(window).width() > 480) {
    $(".fa-github, .fa-envelope").addClass("fa-2x");
  }
});
