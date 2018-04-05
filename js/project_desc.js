$(document).ready(function() {
  $(".project_container").hover(function() {
    if ($(window).width > 1000) {
      $("p", this).show("fade", 500);
      $("img", this).fadeTo(500, 0.3);
    }
  }, function() {
    if ($(window).width > 1000) {
      $("p", this).hide("fade", 500);
      $("img", this).fadeTo(500, 1);
    }
  });
});
