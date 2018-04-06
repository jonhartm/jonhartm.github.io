$(document).ready(function() {
  $('.project').hover(function(x){
    var images = $(this).find(".image-container").children("img");
    var active_index = -1;
    window.timeout = setInterval(function() {
      for (var i = 0; i < images.length; i++) {
        if ($(images[i]).hasClass("active")) {
          active_index = i;
          $(images[i]).toggleClass("active");
        }
      }
      // mod math to loop back
      active_index = ++active_index % images.length;
      $(images[active_index]).toggleClass("active");
    }, 2000);
  }, function() {
    clearTimeout(window.timeout);
  });
});

//ref https://stackoverflow.com/questions/14818438/delay-javascript-hover-action
