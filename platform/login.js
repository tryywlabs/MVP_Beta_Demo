function leftClick() {
  btn.style.left = '0'
  document.querySelector('.student').style.fontWeight = 'normal';
  document.querySelector('.teacher').style.fontWeight = 'bold';
}
  
function rightClick() {
  btn.style.left = '50%'
  document.querySelector('.student').style.fontWeight = 'bold';
  document.querySelector('.teacher').style.fontWeight = 'normal';
}

function toggleLoginButton() {
  const usernameInput = document.getElementById("id-input");
  const passwordInput = document.getElementById("pw-input");
  const loginButton = document.getElementById("login-btn");

  if (usernameInput.value.trim().length >= 3 && passwordInput.value.trim().length >= 8) {
    loginButton.classList.add("filled");
  } else {
    loginButton.classList.remove("filled");
  }
}
