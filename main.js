AOS.init({ duration: 600, anchorPlacement: "center-bottom" });

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".milestone-number")) && !viewed) {
    viewed = true;
    $(".number-holder").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}


// Scripts for Scroll Animations

gsap.registerPlugin(ScrollTrigger);
let speed = 200;

gsap.to("#h2-1", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollElement",
      scrub: 2
    }, 
  });

gsap.to("#h2-2", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollElement",
      scrub: 1
    }, 
  });

gsap.to("#h2-3", {
    yPercent: 60,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollElement",
      scrub: 1
    }, 
  });

gsap.to("#h2-4", {
    yPercent: 80,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollElement",
      scrub: 1
    }, 
  });

gsap.to("#h2-5", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollElement",
      scrub: 1
    }, 
  });

gsap.to("#h2-6", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollElement",
      scrub: 1
    }, 
  });


//reset scrollbar position after refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}