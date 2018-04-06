$(document).ready(function() {
  /*
  Checks all of the checkboxes in the filter form and removes any
  .project_container items that don't match at least one of the checkbox
  "name" values. "name" values with a "/" are split along the slash, so
  "HTML/CSS" will search for divs with either "HTML" or "CSS"
  */
  $("input[type=checkbox]").click(function() {
    // get lists of all of the checked/not checked items
    var ckd = [];
    var not_ckd = []
    $("input[type=checkbox]").each(function() {
      var items = this.name.split("/");
      if (this.checked) {
        ckd = ckd.concat(items);
      } else {
        not_ckd = not_ckd.concat(items);
      }
    });
    if (ckd.length == 0) {
      // nothing selected, so unfade everything
      $(".project-container").fadeIn();
    } else {
      $(".project-container").each(function() {
        // go through each container and get the details
        var project_details = $("h3", this).text();
        var contains = false;
        for (var i=0; i<ckd.length; i++) {
          if (project_details.includes(ckd[i])) {
            // if the project contains any of the checked words...
            contains = true;
          }
        }
        if (contains) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    }
  });
});
