(function ($) {
  "use strict";

  // Hide spinner on page load
  setTimeout(function () {
    $("#spinner").addClass("hide");
  }, 1);

  // Initialize WOW.js for reveal animations
  new WOW().init();

  // Smooth scrolling for navigation links
  $(".controls a.control, .offcanvas a, .sticky-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $(this.hash).offset().top - 80 },
        1500,
        "easeInOutExpo"
      );
      $(".controls a.control").removeClass("active-btn");
      $(this).addClass("active-btn");
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

  // Initialize Isotope for portfolio filtering if needed
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // (Optional) Owl Carousel initialization for testimonials or other sections
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });

  // Initialize Particles.js for dynamic background
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

  // Automatic hero image slideshow with blur transition
  setInterval(function(){
    var $slides = $('.hero-img-container .slide');
    var $active = $slides.filter('.active');
    var index = $slides.index($active);
    var nextIndex = (index + 1) % $slides.length;
    $active.removeClass('active');
    $slides.eq(nextIndex).addClass('active');
  }, 5000); // Change image every 5 seconds

})(jQuery);
