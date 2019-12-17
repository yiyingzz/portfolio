const portfolio = {};

portfolio.init = () => {
  // EVENT HANDLERS

  // scroll down on header
  $(".scroll-down").on("click keypress", function() {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      500
    );
  });

  // toggle navigation menu
  $(".nav__toggle").on("click keypress", function() {
    $("nav").toggleClass("nav-visible");
  });

  // close menu when a link is clicked
  $("nav li").on("click keypress", function() {
    $("nav").toggleClass("nav-visible");
  });
};

$(function() {
  portfolio.init();
  AOS.init();
});
