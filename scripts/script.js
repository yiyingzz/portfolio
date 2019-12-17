const portfolio = {};

portfolio.menuOpen = false;

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
  $(".nav__toggle").on("click", function() {
    if (portfolio.menuOpen === false) {
      $("nav").addClass("nav-visible");
      setTimeout(() => {
        $("nav").removeClass("closed");
        $("nav").toggleClass("open");
      }, 100);
      portfolio.menuOpen = true;
      console.log(portfolio.menuOpen);
    } else {
      $("nav").addClass("closed");
      setTimeout(() => {
        $("nav").removeClass("open nav-visible");
      }, 300);
      portfolio.menuOpen = false;
      console.log(portfolio.menuOpen);
    }
  });

  // close menu when a link is clicked
  $("nav li").on("click keypress", function() {
    $("nav").addClass("closed");
    setTimeout(() => {
      $("nav").removeClass("open nav-visible");
    }, 300);
    portfolio.menuOpen = false;
    console.log(portfolio.menuOpen);
  });
};

$(function() {
  portfolio.init();
  AOS.init({
    disable: "phone"
  });
});
