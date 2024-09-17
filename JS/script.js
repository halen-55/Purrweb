// BURGER
const burgerBtn = document.querySelector(".burger-btn");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  document.querySelector(".burger-menu").classList.toggle("none");
});

// COOKIE CLOSED
const btnCloseCookie = document.querySelector(".button-close--cookie");
const btnDecline = document.querySelector(".btn-decline");
const btnAccept = document.querySelector(".btn-accept");

btnCloseCookie.addEventListener("click", closesCookie);
btnDecline.addEventListener("click", closesCookie);
btnAccept.addEventListener("click", closesCookie);

function closesCookie() {
  document.querySelector(".cookie").classList.toggle("none");
}

// LOGO & BUTTON FIXED
const logoButton = document.querySelector(".header__bottom");
const headerTop = document.querySelector(".header__top");
window.addEventListener("scroll", (e) => {
  const scrollTop = document.documentElement.scrollTop;
  if (logoButton.getBoundingClientRect().top < 0) {
    logoButton.classList.add("fixed");
  } else if (document.documentElement.scrollTop == 0) {
    logoButton.classList.remove("fixed");
  }
});

// FORM
const form = document.querySelector(".form");
const btnCloseForm = document.querySelector(".button-close--form");
const inputName = document.getElementById("name");
const errorName = document.querySelector(".error-name");
const inputEmail = document.getElementById("email");
const errorEmail = document.querySelector(".error-email");
const inputNumber = document.getElementById("number");
const errorNumber = document.querySelector(".error-number");
const errorFill = document.querySelector(".form__text-fill");
const buttonForm = document.getElementById("submit");
const btnOpenForm = document.querySelectorAll(".btn--contact-sales");

// Получение вводимого значения в inputName, inputEmail, inputNumber
let inputNameValue = "";
let inputEmailValue = "";
let inputNumberValue = "";

inputName.addEventListener("input", (event) => {
  let inputNameElement = event.target;
  return (inputNameValue = inputNameElement.value);
});

inputEmail.addEventListener("input", (event) => {
  let inputEmailElement = event.target;
  return (inputEmailValue = inputEmailElement.value);
});

inputNumber.addEventListener("input", (event) => {
  let inputNumberElement = event.target;
  return (inputNumberValue = inputNumberElement.value);
});

// Открытие формы при нажатии на кнопку contact sales
btnOpenForm.forEach((element) => {
  element.addEventListener("click", () => {
    form.classList.remove("none");
  });
});

// Кнопка закрытия формы
btnCloseForm.addEventListener("click", closesForm);
function closesForm() {
  form.classList.toggle("none");
}

// Появление ошиибок у обязательных полей для заполнения
showErrorOfEmptyFields(inputName, errorName);
showErrorOfEmptyFields(inputEmail, errorEmail);
showErrorOfEmptyFields(inputNumber, errorNumber);

function showErrorOfEmptyFields(field, fieldError) {
  field.addEventListener("blur", function () {
    if (field.value.length === 0) {
      field.classList.add("border-red");
      fieldError.textContent = "This field is required";
      errorFill.textContent = "Please fill in all required fields";
      buttonForm.classList.add("disabled");
      hideError(field, fieldError);
    }

    if (
      !/[a-zа-яё]/.test(inputNameValue) &&
      inputNameValue.length > 0 &&
      !inputNameValue.indexOf(" ")
    ) {
      inputName.classList.add("border-red");
      errorName.textContent = "Error";
      errorFill.textContent = "Please fill in all required fields";
      buttonForm.classList.add("disabled");
      hideError(field, fieldError);
    }
    if (!inputEmailValue.includes("@") && inputEmailValue != 0) {
      inputEmail.classList.add("border-red");
      errorEmail.textContent = "Invalid email";
      errorFill.textContent = "Please fill in all required fields";
      buttonForm.classList.add("disabled");
      hideError(field, fieldError);
    }
    if (inputNumberValue.length < 10 && inputNumberValue.length != 0 || inputNumberValue.length > 10) {
      inputNumber.classList.add("border-red");
      errorNumber.textContent = "Invalid phone number";
      errorFill.textContent = "Please fill in all required fields";
      buttonForm.classList.add("disabled");
      hideError(field, fieldError);
    }
  });
}

// Удаления ошибки у обязательного поля для заполнения
function hideError(field, fieldError) {
  field.addEventListener("input", () => {
    field.classList.remove("border-red");
    fieldError.textContent = "";
  });
}

// Активация кнопки и сброс основной ошибки при заполнении всех обязательных полей
form.addEventListener("input", () => {
  if (
    inputName.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputNumberValue.length == 10
  ) {
    errorFill.textContent = "";
    buttonForm.classList.remove("disabled");
  }
});

//SUCCESS
const success = document.querySelector(".success");
const btnCloseSuccess = document.querySelector(".button-close--success");
const buttonSuccess = document.querySelector(".success__btn");

// Закрытие формы, открытие модуля success,
form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("none");
  success.classList.remove("none");
});

// Кнопка закрытия success
btnCloseSuccess.addEventListener("click", closesSuccess);
buttonSuccess.addEventListener("click", closesSuccess);

function closesSuccess() {
  success.classList.toggle("none");
}
