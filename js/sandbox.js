$("#item-1").click(function() {
  $("#secret").show();
});

// $("#secret").hide()
$("body").css("background-color", "Cornsilk");

$("#item-2").click(function() {
  $("#secret-2").show();
});

var options = {
  "font-size": "300%",
  "margin-left": "200px",
  "padding": "50px"
};

$("#change-me").animate(options);
