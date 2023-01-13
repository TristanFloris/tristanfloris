//// NAVIGATION MOBILE v2 + text change in menu button
let overlayShown = false;
let scrollPosition = 0;
const navToggle = document.querySelector(".mobile-nav-toggle");

document
  .querySelector(".mobile-nav-toggle")
  .addEventListener("click", function () {
    if (!overlayShown) {
      showOverlay();
      navToggle.innerHTML = "Close";
    } else {
      removeOverlay();
      navToggle.innerHTML = "Menu";
    }
    overlayShown = !overlayShown;
  });

function showOverlay() {
  scrollPosition = window.pageYOffset;
  const mainEl = document.querySelector(".main-content");
  mainEl.style.top = -scrollPosition + "px";
  document.body.classList.add("show-overlay");
}

function removeOverlay() {
  document.body.classList.remove("show-overlay");
  window.scrollTo(0, scrollPosition);
  const mainEl = document.querySelector(".main-content");
  mainEl.style.top = 0;
}

// CHANGE MENU BUTTON ON CLICK
if (navToggle.innerHTML === "Menu") {
  navToggle.innerHTML = "Close";
} else {
  navToggle.innerHTML = "Menu";
}

// STICKY HEADER
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Set local time
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

///////////////////////////////////////////////////////////
// Toggle Dark/light mode

// var checkbox = document.querySelector("input[name=theme]");

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     trans();
//     document.documentElement.setAttribute("data-theme", "dark");
//   } else {
//     trans();
//     document.documentElement.setAttribute("data-theme", "light");
//   }
// });

// let trans = () => {
//   document.documentElement.classList.add("transition");
//   window.setTimeout(() => {
//     document.documentElement.classList.remove("transition");
//   }, 1000);
// };

const btn = document.querySelector("input[name=theme]");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var checkbox = document.getElementById("switch");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.querySelector(":root").classList.toggle("dark-theme");
  checkbox.checked = false;
} else if (currentTheme == "light") {
  document.querySelector(":root").classList.toggle("light-theme");
  checkbox.checked = true;
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.querySelector(":root").classList.toggle("light-theme");
    var theme = document
      .querySelector(":root")
      .classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.querySelector(":root").classList.toggle("dark-theme");
    var theme = document.querySelector(":root").classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
