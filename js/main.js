(function ($) {
  "use strict";

  // Hide spinner on page load
  setTimeout(function () {
    $("#spinner").addClass("hide");
  }, 1);

  // Initialize WOW.js for reveal animations
  new WOW().init();

  // Smooth scrolling for all navigation links (offcanvas and sticky)
  $(".offcanvas a, .sticky-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $(this.hash).offset().top - 80 },
        1500,
        "easeInOutExpo"
      );
      $(".sticky-nav .active").removeClass("active");
      $(this).closest("li").addClass("active");
    }
  });

  // Back-to-top button functionality
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initialize Typed.js for header tagline
  if ($(".typed-text-output").length === 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Initialize Isotope for portfolio filtering
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // (Optional) Owl Carousel for testimonials/achievements if needed
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
})(jQuery);
