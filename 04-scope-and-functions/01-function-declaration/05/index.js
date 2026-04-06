(function () {
  // Insert code here
  // let userInput = prompt('Enter username : ');
  // let passwordInput = prompt('Enter password : ');

  // let loginResult = login(userInput, passwordInput);
  // alert(loginResult);
})();

function login(username, password) {
  return username === 'admin' && password === 'P@ssw0rd'
    ? 'Login successful'
    : 'Login failed';
}
