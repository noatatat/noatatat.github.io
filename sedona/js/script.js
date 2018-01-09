var formButton  = document.querySelector(".order-form-button");
var orderForm = document.querySelector(".order");
var arrival = orderForm.querySelector("[name=arrival]");
var departure = orderForm.querySelector("[name=departure]");
var adult = orderForm.querySelector("[name=adult]");
var children = orderForm.querySelector("[name=children]");
var adultNumberLess = document.querySelector(".adult-count .number-less");
var adultNumberMore = document.querySelector(".adult-count .number-more");
var childrenNumberLess = document.querySelector(".children-count .number-less");
var childrenNumberMore = document.querySelector(".children-count .number-more");
var orderOpen = orderForm.classList.contains("order-open");
var orderHidden = orderForm.classList.contains("order-hidden");

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderForm.classList.remove("order-error");
  if (!orderOpen && !orderHidden) {
    orderForm.classList.add("order-hidden");
    orderHidden = orderForm.classList.contains("order-hidden");;
  } else {
    orderForm.classList.toggle("order-open");
    orderOpen = orderForm.classList.contains("order-open");
    orderForm.classList.toggle("order-hidden");
    orderHidden = orderForm.classList.contains("order-hidden");
  }
});

adultNumberLess.addEventListener("click", function (evt) {
  evt.preventDefault();
  --adult.value;
  if (adult.value < 0) {
    adult.value = 0;
  }
});

adultNumberMore.addEventListener("click", function (evt) {
  evt.preventDefault();
  ++adult.value;
  if (adult.value > 99) {
    adult.value = 99;
  }
});

childrenNumberLess.addEventListener("click", function (evt) {
  evt.preventDefault();
  --children.value;
  if (children.value < 0) {
    children.value = 0;
  }
});

childrenNumberMore.addEventListener("click", function (evt) {
  evt.preventDefault();
  ++children.value;
  if (children.value > 99) {
    children.value = 99;
  }
});

orderForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    evt.preventDefault();
    orderForm.classList.remove("order-error");
    orderForm.offsetWidth = orderForm.offsetWidth;
    orderForm.classList.add("order-error");
  }
});
