const formMain = document.querySelector('#formMain');
const loginButton = formMain.querySelector('#logIn');
const registrationButton = formMain.querySelector('#registration');
const usernameInput = formMain.querySelector('#UserName');
const password1Input = formMain.querySelector('#password1');
const password2Input = formMain.querySelector('#password2');
const submitFormMainButton = formMain.querySelector('#submit');


password2Input.disabled = true;

registrationButton.onclick = function () {
  password2Input.disabled = false;
  password1Input.placeholder = 'Придумайте пароль';
  submitFormMainButton.innerHTML = 'Регистрация';
}

loginButton.onclick = function () {
  password2Input.disabled = true;
  password1Input.placeholder = 'Введите пароль';
  submitFormMainButton.innerHTML = 'Вход';
}

submitFormMainButton.onclick = function () {
  if (usernameInput.value != '' && password1Input.value != '') {
    if (submitFormMainButton.innerHTML == 'Регистрация') {
      if (password1Input.value == password2Input.value) {
        let state = {
          password: password1Input.value,
          dollars: 100,
          history: ''
        }
        localStorage.setItem(usernameInput.value, JSON.stringify(state));
      } else {
        alert('Пароли не совпадают')
      }
    }else{
      let usernameKey = JSON.parse(localStorage.getItem(usernameInput.value));
      if (usernameKey) {
        console.log(usernameKey)
        if (usernameKey.password == password1Input.value) {
          alert('Вошли');
        }
        alert('Неверный пароль');
      }else{
        alert('Неверный имя');
      }
    }
  } else {
    if (usernameInput.value == '') {
      alert('Введите имя');
    }else{
      alert('Введите пароль');
    }
  }
}