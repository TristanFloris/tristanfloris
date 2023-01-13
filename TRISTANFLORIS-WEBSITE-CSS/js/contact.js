//////////////// Contact Form when text in is input change class
function checkForInput(element) {
  // element is passed to the function ^

  const $label = $(element).siblings("label");

  if ($(element).val().length > 0) {
    $label.addClass("input-has-value");
  } else {
    $label.removeClass("input-has-value");
  }
}

// The lines below are executed on page load
$("input.field").each(function () {
  checkForInput(this);
});

// The lines below (inside) are executed on change & keyup
$("input.field").on("change keyup", function () {
  checkForInput(this);
});

// The lines below are executed on page load
$("textarea.field").each(function () {
  checkForInput(this);
});

// The lines below (inside) are executed on change & keyup
$("textarea.field").on("change keyup", function () {
  checkForInput(this);
});

// Marquee smooth-contactpage

console.clear();

gsap.set(".wrapper-2", { xPercent: -50, yPercent: -50 });
gsap.set("#no03", { y: 0 });

// boxWidth moet worden aangepast aan de breedte die is aangegeven in de css

if (window.matchMedia("(min-width: 600px)").matches) {
  var boxWidth = 2150;
} else {
  var boxWidth = 1100;
}

(totalWidth = boxWidth * 3), //  * n of boxes
  (no03 = document.querySelectorAll("#no03 .box"));
(dirFromLeft = "+=" + totalWidth), (dirFromRight = "-=" + totalWidth);

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction) {
  gsap.set(which, {
    x: function (i) {
      return i * boxWidth;
    },
  });
  var action = gsap.timeline().to(which, {
    x: direction,
    modifiers: {
      x: (x) => mod(parseFloat(x)) + "px",
    },
    duration: time,
    ease: "none",
    repeat: -1,
  });
  return action;
}

// snelheid is nu 30 hieronder.
var master = gsap.timeline().add(marquee(no03, 30, dirFromRight), 3);
