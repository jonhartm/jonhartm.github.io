$(document).ready(function() {
  $(".project-container").hover(function() {
    if ($(window).width() > 1000) {
      $("p", this).show("fade", 500);
      $("img", this).fadeTo(500, 0.1);
    }
  }, function() {
    if ($(window).width() > 1000) {
      $("p", this).hide("fade", 500);
      $("img", this).fadeTo(500, 1);
    }
  });
});
