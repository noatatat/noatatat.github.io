var menuToggler  = document.querySelector(".page-header__toggle");
var pageHeader = document.querySelector(".page-header");

menuToggler.addEventListener("click", function (evt) {
  evt.preventDefault();
  pageHeader.classList.toggle("page-header--closed-menu");
});
