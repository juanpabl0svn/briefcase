const $ = (el) => document.getElementById(el);


const setDarkMode = $("dark-mode");

const header = $("header");


setDarkMode.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark");
});

let firtsLocation = window.pageYOffset;

window.onscroll = function () {
  let displacement = window.pageYOffset;

  header.style.top = firtsLocation >= displacement ? "0" : "-100px";
  firtsLocation = displacement;
};
