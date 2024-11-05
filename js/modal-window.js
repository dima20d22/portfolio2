const modalNav = document.getElementById("modalNav");
const modalBackdrop = document.querySelector(".modal__backdrop");
const modalWindow = document.querySelector(".modal__window");
const modalClose = document.querySelector(".modal__cross");
const modalCancel = document.querySelector(".modal__buttons button");

let withinModal = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalToggle();
});

modalNav.addEventListener("click", modalToggle);
modalClose.addEventListener("click", modalToggle);
modalCancel.addEventListener("click", (e) => {
  e.preventDefault();
  modalToggle();
});

modalWindow.addEventListener("click", () => {
  withinModal = true;
});

modalBackdrop.addEventListener("click", (event) => {
  if (withinModal) {
    withinModal = false;
    return;
  }
  modalToggle();
});

function modalToggle() {
  modalBackdrop.classList.toggle("is-open");
  modalNav.classList.toggle("navi__item--active");
}
