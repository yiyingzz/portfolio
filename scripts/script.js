const portfolio = {};

portfolio.isMenuOpen = false;

portfolio.init = () => {
  // EVENT HANDLERS

  // scroll down on header
  $(".scroll-down").on("click keydown", function (e) {
    if (e.type === "click" || e.keyCode === 13 || e.keyCode === 32) {
      $("html, body").animate(
        {
          scrollTop: $("#about").offset().top
        },
        500
      );
    }
  });

  // toggle navigation menu
  $(".nav__toggle").on("click", function () {
    if (portfolio.isMenuOpen === false) {
      portfolio.openMenu();
    } else {
      portfolio.closeMenu();
    }
  });

  // close menu when a link is clicked or enter key
  $("nav li, .nav__close").on("click", function (e) {
    portfolio.closeMenu();
    if ($(e.target).hasClass("nav__close")) {
      $(".nav__toggle")[0].focus();
    }
  });

  // close menu on esc key
  $(document).on("keydown", function (e) {
    if (e.keyCode === 27 && portfolio.isMenuOpen === true) {
      portfolio.closeMenu();
      $(".nav__toggle")[0].focus();
    }
  });

  // toggle theme
  $(".theme-toggle").on("click", function () {
    // put z-index back on about__img::after cuz for some reason disabling AOS sets it to -1
    console.log(document.documentElement);
    console.log($("html"));
    if (!$("html").attr("data-theme")) {
      $("html").attr("data-theme", "alt");
      AOS.init({ disable: true });
    } else {
      $("html").removeAttr("data-theme");
      AOS.init({
        disable: false
      });
      console.log("else, disable false");
      console.log(AOS);
    }
  });
};

portfolio.openMenu = function () {
  $("nav").addClass("nav-visible");
  setTimeout(() => {
    $("nav").removeClass("closed");
    $("nav").toggleClass("open");
  }, 100);
  portfolio.isMenuOpen = true;
  $(".nav__toggle").attr("aria-expanded", "true");
  $(".nav__icon").removeClass("fa-bars").addClass("fa-times");
};

portfolio.closeMenu = function () {
  $("nav").addClass("closed");
  setTimeout(() => {
    $("nav").removeClass("open nav-visible");
  }, 300);
  portfolio.isMenuOpen = false;
  $(".nav__toggle").attr("aria-expanded", "false");
  $(".nav__icon").removeClass("fa-times").addClass("fa-bars");
  console.log("closed");
  console.log($(".nav__icon"));
};

$(function () {
  portfolio.init();
  AOS.init({
    disable: "phone"
  });
});
