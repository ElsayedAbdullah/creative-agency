$(function () {
  // sticky header
  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop();
    if (windowScroll >= 100) {
      $("#header,.header-blog").addClass("fixed-nav");
      $("#header .logo img").attr("src", "imgs/logo.webp");
    } else {
      $("#header,.header-blog").removeClass("fixed-nav");
      $("#header .logo img").attr("src", "imgs/logo-alt.webp");
    }

    if (windowScroll >= 500) {
      $(".back-to-top").fadeIn(100);
    } else {
      $(".back-to-top").fadeOut(100);
    }

  });

  $(".back-to-top").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 600);
  });

  // trigger owl carousel
  $(".choose-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut"
  });

  // trigger owl carousel
  $(".testim-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

  // trigger type.js plugin
  $("#typed").typed({
    strings: ["creative agency.", "professional.", "effective and talented."],
    typeSpeed: 100,
    smartBackspace: true,
    backSpeed: 60,
    loop: true
  });
});