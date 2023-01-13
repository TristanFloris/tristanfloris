///////////////////////////////////////////////////////////
// Marquee smooth

// console.clear();

// gsap.set(".wrapper", { xPercent: -50, yPercent: -50 });
// gsap.set("#no03", { y: 0 });

// // boxWidth moet worden aangepast aan de breedte die is aangegeven in de css

// if (window.matchMedia("(min-width: 600px)").matches) {
//   var boxWidth = 1750;
// } else {
//   var boxWidth = 900;
// }

// (totalWidth = boxWidth * 3), //  * n of boxes
//   (no04 = document.querySelectorAll("#no03 .box"));
// (dirFromLeft = "+=" + totalWidth), (dirFromRight = "-=" + totalWidth);

// var mod = gsap.utils.wrap(0, totalWidth);

// function marquee(which, time, direction) {
//   gsap.set(which, {
//     x: function (i) {
//       return i * boxWidth;
//     },
//   });
//   var action = gsap.timeline().to(which, {
//     x: direction,
//     modifiers: {
//       x: (x) => mod(parseFloat(x)) + "px",
//     },
//     duration: time,
//     ease: "none",
//     repeat: -1,
//   });
//   return action;
// }

console.clear();

gsap.set(".wrapper", { xPercent: -50, yPercent: -50 });
gsap.set("#no03", { y: 120 });

if (window.matchMedia("(min-width: 600px)").matches) {
  var boxWidth = 1750;
} else {
  var boxWidth = 900;
}

(totalWidth = boxWidth * 3), //  * n of boxes
  (no03 = document.querySelectorAll("#no03 .box")),
  (dirFromLeft = "+=" + totalWidth),
  (dirFromRight = "-=" + totalWidth);

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

var master = gsap.timeline().add(marquee(no03, 32, dirFromRight), 3);

// accordion =============================

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
