const portfolio = {};

portfolio.init = () => {
  // EVENT HANDLERS

  // scroll down on header
  $(".scroll-down").on("click", function() {
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
};

$(function() {
  portfolio.init();
  AOS.init();
});
