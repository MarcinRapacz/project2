const licenceSection = document.querySelector(".Licence");
const descContainer = document.querySelector(".Licence__desc-container");
const acceptBtn = document.querySelector(".Licence__btn");
const showBtn = document.querySelector(".Footer__btn");
const showClass = "Licence__desc-container--show";
const hideClass = "Licence--hide";

const showLicence = () =>
  descContainer.classList.contains(showClass)
    ? null
    : descContainer.classList.add(showClass);

const hideLicence = () => {
  licenceSection.classList.add(hideClass);
  localStorage.setItem("licence", "accepted");
};

const showAgainLicence = () => {
  licenceSection.classList.remove(hideClass);
  descContainer.classList.add(showClass);
};

if (!localStorage.getItem("licence")) {
  licenceSection.classList.remove(hideClass);
}

// Listeners
licenceSection.addEventListener("mouseenter", showLicence);
acceptBtn.addEventListener("click", hideLicence);
showBtn.addEventListener("click", showAgainLicence);
