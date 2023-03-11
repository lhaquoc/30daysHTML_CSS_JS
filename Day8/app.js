var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(item, message) {
  let parent = item.parentElement;
  let small = parent.querySelector('small');
  parent.classList.add('error');
  small.innerText = message;
}

function showSuccess(item) {
  let parent = item.parentElement;
  let small = parent.querySelector('small');
  parent.classList.remove('error');
  small.innerText = '';
}

function checkEmptyError(inputList) {
  let isEmptyError = false;
  inputList.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      showError(input, 'Khong duoc de trong');
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

function checkEmailError(input) {
  input.value = input.value.trim();

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let isEmailError = !regexEmail.test(input.value);

  if (isEmailError) {
    showError(input, 'Email is invalid');
  } else {
    showSuccess(input);
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Phai co it nhat ${min} ky tu.`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Phai it hon ${max} ky tu.`);
    return true;
  }
  return false;
}

function checkMathPasswordError(password, confirmPassword) {
  if (password.value !== confirmPassword) {
    showError(confirmPassword, 'Mat khau khong trung khop');
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
  let isEmailError = checkEmailError(email);
  let isUsernameLengthError = checkLengthError(username, 6, 16);
  let isPasswordLengthError = checkLengthError(password, 8, 32);
  let isPasswordMatchError = checkMathPasswordError(password, confirmPassword);
  if (
    isEmptyError ||
    isEmailError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isPasswordMatchError
  ) {
    // do nothing
  } else {
    // logic
  }
});
