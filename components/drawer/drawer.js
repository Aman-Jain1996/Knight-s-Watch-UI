const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

function showMenu() {
  document
    .querySelector(".dismissible-drawer-menu")
    .classList.remove("menu-hidden");

  document
    .querySelector(".dismissible-main-content")
    .classList.remove("expanded-main-content");
  menuIcon.style.display = "none";
}

menuIcon.addEventListener("click", showMenu);

function HideMenu() {
  document
    .querySelector(".dismissible-drawer-menu")
    .classList.add("menu-hidden");

  document
    .querySelector(".dismissible-main-content")
    .classList.add("expanded-main-content");
  menuIcon.style.display = "block";
}

closeIcon.addEventListener("click", HideMenu);
