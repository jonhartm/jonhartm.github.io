$(document).ready(function() {
  $(".project_container").hover(function() {
    $("p", this).show("fade", 500);
    $("img", this).fadeTo(500, 0.3);
  }, function() {
    $("p", this).hide("fade", 500);
    $("img", this).fadeTo(500, 1);
  });
});
