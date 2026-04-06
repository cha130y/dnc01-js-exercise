(function () {
  // Insert code here
  // let userNameInput = prompt('Enter your username : ');
  // if (!isValidValue(userNameInput)) return;

  // let passwordInput = prompt('Enter your password : ');
  // if (!isValidValue(passwordInput)) return;

  // if (isValidLogin(userNameInput, passwordInput)) {
  //   alert(`Hello ${userNameInput}`);
  // } else {
  //   alert('Invalid username or password');
  // }
})();

function isValidValue(value) {
  if (value === null) {
    alert('Cancelled');
    return false;
  }

  if (value.trim() === '') {
    alert('username is required');
    return false;
  }
  return true;
}

function isValidLogin(userName, password) {
  return (
    (userName === 'admin' && password === '1234') ||
    (userName === 'john' && password === 'qwerty')
  );

  // if (
  //   (value.userNameInput === 'admin' && value.passwordInput === '1234') ||
  //   (value.userNameInput === 'john' && value.passwordInput === 'qwerty')
  // ) {
  //   alert(`Hello ${value.userNameInput}`);
  //   return true;
  // } else {
  //   alert('Invalid username or password');
  //   return false;
  // }
}
