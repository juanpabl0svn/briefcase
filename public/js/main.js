const $ = (el) => document.getElementById(el);

const getDarkMode = () =>
  window.localStorage.getItem("darkMode") ||
  window.localStorage.setItem("darkMode", "false");

const setDarkMode = $("dark-mode");

const header = $("header");

const menu = $("menu");

const images = $("images");

const contact = $("contact");

const icons = $("icons_authors");

const subtitles = document.getElementsByClassName('subtitle');

const texts = document.getElementsByClassName('text');

contact.classList.remove("-left-[100%]");

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
  //When user is in the top (for menu) or when the menu is visible
  if (window.scrollY === 0 || menu.checked) {
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

  const iconsHeight = icons.offsetTop;

  Object.entries(subtitles).forEach(([key,value])=> {
    if (value.offsetTop-700 < scrollTop){
      value.classList.remove('opacity-0')
      value.classList.add('animate-fade-down')
    }
  })

  Object.entries(texts).forEach(([key,value])=> {
    if (value.offsetTop-800 < scrollTop){
      value.classList.remove('opacity-0')
      value.classList.add('animate-fade')
    }
  })


  if (imagesHeight - 650 < scrollTop) {
    Object.entries(images.childNodes).forEach(([key, value]) => {
      if (value.nodeName != "#text") {
        value.classList.remove("opacity-0");
        value.classList.add("animate-fade-right");
      }
    });
  }


  if (iconsHeight -700 < scrollTop) {
    Object.entries(icons.childNodes).forEach(([key,value])=>{
      if (value.nodeName != '#text'){
        value.classList.remove("opacity-0")
        value.classList.add('animate-fade-right')
      }

    })
  }
}

createEfects()