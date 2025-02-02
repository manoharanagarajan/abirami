(function ($) {
  "use strict";

  // Hide spinner on page load
  setTimeout(function () {
    $("#spinner").addClass("hide");
  }, 1);

  // Initialize WOW.js for reveal animations
  new WOW().init();

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

  // Initialize Isotope for portfolio filtering after images have loaded
  var $portfolioContainer = $(".portfolio-container").imagesLoaded(function () {
    $portfolioContainer.isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    $(".portfolio-container").isotope({ filter: $(this).data("filter") });
  });

  // (Optional) Owl Carousel for testimonials/achievements if needed
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });

  // Initialize Particles.js for dynamic background (full website)
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#6244C5"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#6244C5",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });

  // Navigation Controls using anchor tags (click handled by browser plus smooth scroll)
  $(".controls a.control").on("click", function (e) {
    e.preventDefault();
    // Remove active class from all controls and add to the clicked one
    $(".controls a.control").removeClass("active-btn");
    $(this).addClass("active-btn");
    // Get the target section from the href
    var target = $(this).attr("href");
    if (target) {
      $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 800);
    }
  });

  // Toggle Light/Dark Theme
  $(".theme-btn").on("click", function () {
    $("body").toggleClass("light-mode");
  });
})(jQuery);
