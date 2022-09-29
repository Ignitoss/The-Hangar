////////////////////////////////////////////////////////////////////////////////////////
// Reservations popup

const btnReserveNow = document.querySelector(".event-host-btn");
const formPopoutEl = document.querySelector(".form-popout");
const btnCloseForm = document.querySelector(".btn-form-close");

btnReserveNow.addEventListener("click", function () {
  formPopoutEl.classList.toggle("form-open");
});

btnCloseForm.addEventListener("click", function () {
  formPopoutEl.classList.toggle("form-open");
});

("form-open");
