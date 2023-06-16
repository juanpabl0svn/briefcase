const $ = (el) => document.getElementById(el);

const getDarkMode = () =>
  window.localStorage.getItem("darkMode") ||
  window.localStorage.setItem("darkMode", "false");

const setDarkMode = $("dark-mode");

const header = $("header");

const mobile = $("mobile");

const images = $("images");

const contact = $("contact");

const journey = $("journey");

const icons = $("icons");

setTimeout(() => {
  // contact.classList.remove('-left-[100%')
  contact.classList.remove("-left-[100%]");
  contact.classList.add("left-3");

  setTimeout(() => {
    contact.classList.remove("left-3");
  }, 250);
}, 200);

// Dark mode with localStorage
setDarkMode.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark");
  setDarkMode.checked = !setDarkMode.checked;
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("darkMode", "true");
    setDarkMode.checked = true;
  } else {
    localStorage.setItem("darkMode", "false");
    setDarkMode.checked = false;
  }
});

if (localStorage.getItem("darkMode") === "true") {
  document.documentElement.classList.add("dark");
  setDarkMode.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  setDarkMode.checked = false;
}

//fist location when scroll
let firtsLocation = window.pageYOffset;

//Scrolling
document.onscroll = function (e) {
  //When user is in the top (for mobile) or when the menu is visible
  if (window.scrollY === 0 || mobile.checked) {
    header.style.top = "0";
    return;
  }

  createEfects();

  let displacement = window.pageYOffset;
  header.style.top = firtsLocation >= displacement ? "0" : "-100px";
  firtsLocation = displacement;
};

function createEfects() {
  const scrollTop = document.documentElement.scrollTop;

  const imagesHeight = images.offsetTop;

  const journeyHeight = journey.offsetTop;

  const iconsHeight = icons.offsetTop;

  if (imagesHeight - 750 < scrollTop) {
    Object.entries(images.childNodes).forEach(([key, value]) => {
      if (value.nodeName != "#text") {
        value.classList.remove("opacity-0");
        value.classList.add("animate-fade-right");
      }
    });
  }

  if (journeyHeight - 750 < scrollTop) {
    journey.classList.remove("opacity-0");
    journey.classList.add("animate-fade");
  }

  if (iconsHeight -750 < scrollTop) {
    Object.entries(icons.childNodes).forEach(([key,value])=>{
      if (value.nodeName != '#text'){
        value.classList.remove("opacity-0")
        value.classList.add('animate-fade-right')
      }

    })
  }
}
