$(document).ready(function() {
  $('.project').hover(function() {
    console.log("starting");
    var images = $(this).find(".image-container").children("img");
    var cap = $(this).find(".image-container").children(".caption");
    if (images.length > 1) { // don't bother unless there's at least two pictures
      $(images).not(".active").css({"display":"none"});
      var active_index = -1;
      window.timeout = setInterval(function() {
        for (var i = 0; i < images.length; i++) {
          if ($(images[i]).hasClass("active")) {
            active_index = i;
            $(images[i]).toggleClass("active");
            $(images[i]).fadeToggle().css({"display":"none"});
          }
        }
        // mod math to loop back
        active_index = ++active_index % images.length;
        $(images[active_index]).toggleClass("active");
        $(images[active_index]).fadeToggle();
        var img_alt_text = $(images[active_index]).attr("alt");
        $(cap).html(img_alt_text);
      }, 5000);
    }
  }, function() {
    clearTimeout(window.timeout); // clear the timer
  });
});

//ref https://stackoverflow.com/questions/14818438/delay-javascript-hover-action
