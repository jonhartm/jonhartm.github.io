$(document).ready(function() {
  // set informational text over all image containers that have more than one image
  var all_containers = $('.image-container');
  for (var i = 0; i < all_containers.length; i++) {
    if ($(all_containers[i]).children("img").length > 1) {
      $(all_containers[i]).find("h4").html("(Hover over the image to start a slideshow)");
    } else {
      $(all_containers[i]).find("h4").html("Single Image");
      $(all_containers[i]).find("h4").hide();
    }
  }

  /*
    As long as the user is hovering over an image container on the projects
    details page, the picture will change every 4 seconds, looping back to the
    first once it reaches the end. Moving the cursor out of the container stops
    the interval. The alt text for each image is also displayed beneath the image
    as it changes.
  */

  $('.image-container').hover(function() {
    var images = $(this).children("img");
    var cap = $(this).children(".caption");
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
      }, 4000);
    }
  }, function() {
    clearTimeout(window.timeout); // clear the timer
  });
});

//ref https://stackoverflow.com/questions/14818438/delay-javascript-hover-action
