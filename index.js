// on click to open menu

let menuButton = document.querySelector(".option-menu");
let leftMenu = document.querySelector(".menu-navigation");
let closeMenu = document.querySelector(".close");

menuButton.addEventListener("click", () => {
  leftMenu.classList.toggle("open");
});

closeMenu.addEventListener("click", () => {
  leftMenu.classList.toggle("open");
});
