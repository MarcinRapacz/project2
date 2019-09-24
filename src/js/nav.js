const hamburgerBtn = document.querySelector(".Nav__hamburger");
const container = document.querySelector(".Nav");
const list = document.querySelector(".Nav__list");
const backdrop = document.querySelector(".Backdrop");
const links = document.querySelectorAll(".Nav__link");

const showMenu = () => {
  list.classList.add("Nav__list--show");
  container.classList.add("Nav--hide");
  backdrop.classList.remove("Backdrop--hide");
};

const hideMenu = () => {
  list.classList.remove("Nav__list--show");
  container.classList.remove("Nav--hide");
  backdrop.classList.add("Backdrop--hide");
};

const smallMenu = () => {
  if (window.scrollY) {
    links.forEach(link => link.classList.add("Nav__link--small"));
  } else {
    links.forEach(link => link.classList.remove("Nav__link--small"));
  }
};

document.addEventListener("scroll", smallMenu);
hamburgerBtn.addEventListener("click", showMenu);
backdrop.addEventListener("click", hideMenu);
links.forEach(link => link.addEventListener("click", hideMenu));
