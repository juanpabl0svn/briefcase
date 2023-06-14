const $ = (el) => document.getElementById(el);

const getDarkMode = () => window.localStorage.getItem('darkMode') || window.localStorage.setItem('darkMode','false');

const setDarkMode = $("dark-mode");

const header = $("header");

setDarkMode.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark")
  setDarkMode.checked = !setDarkMode.checked
  if(document.documentElement.classList.contains('dark')){
    localStorage.setItem('darkMode','true')
    setDarkMode.checked = true
  }else{
    localStorage.setItem('darkMode','false')
    setDarkMode.checked = false
  }
});

if (localStorage.getItem('darkMode') === 'true'){
  document.documentElement.classList.add('dark')
  setDarkMode.checked = true

}else{
  document.documentElement.classList.remove('dark')
  setDarkMode.checked = false
}

let firtsLocation = window.pageYOffset;

window.onscroll = function () {
  if (window.scrollY === 0){
    header.style.top = '0'
    return
  }
  // if (window.scrollY)
  let displacement = window.pageYOffset;
  header.style.top = firtsLocation >= displacement ? "0" : "-100px";
  firtsLocation = displacement;
};
