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
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
("nav-open");

////////////////////////////////////////////////////////////////////////////////////////
// carousel slider commands
const carousel = function () {
  const slides = document.querySelectorAll(".carousel");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const dotcontainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotcontainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot--active"));

    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  let timer;
  const slideTimer = function () {
    timer = setInterval(nextSlide, 6000);
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
    clearInterval(timer);
    slideTimer();
  };

  // Previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    clearInterval(timer);
    slideTimer();
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
    slideTimer();
  };
  init();

  // Event Handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  //   Allowing scrolling via keyboard arrows
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const { slide } = e.target.dataset;
      curSlide = slide;
      goToSlide(slide);
      activateDot(slide);
      clearInterval(timer);
      slideTimer();
    }
  });
};
carousel();
