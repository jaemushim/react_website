AOS.init();

var $grid = $(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

$(".filter button").on("click", function (e) {
  var value = $(this).attr("data-filter");

  $(".filter button").removeClass("on");
  $(e.target).addClass("on");

  $grid.isotope({
    filter: value,
  });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 60) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});
