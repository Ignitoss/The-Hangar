////////////////////////////////////////////////////////////////////////////////////////
// Update copyright year
const copyrightYear = function () {
  const year = document.querySelector(".copyright-year");
  const now = new Date().getFullYear();
  year.innerHTML = now;
};
copyrightYear();

////////////////////////////////////////////////////////////////////////////////////////
// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".nav-links-mobile");
const mobileNavEl = document.querySelectorAll(".icon-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  mobileNavEl.forEach((el) => {
    el.classList.toggle("nav-open");
  });
});
("nav-open");
