let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");

function checkPassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
    if (!password.classList.contains("error")) {
      password.classList.toggle("error");
      confirmPassword.classList.toggle("error");
    }
  } else {
    confirmPassword.setCustomValidity("");
    if (password.classList.contains("error")) {
      password.classList.toggle("error");
      confirmPassword.classList.toggle("error");
    }
  }
  confirmPassword.reportValidity();
}

confirmPassword.addEventListener('keyup', checkPassword);
document.querySelector(".submit").addEventListener('click', checkPassword);
