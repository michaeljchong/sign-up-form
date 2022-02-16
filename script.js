let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");

function checkPassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
  confirmPassword.reportValidity();
}

confirmPassword.addEventListener('keyup', checkPassword);
