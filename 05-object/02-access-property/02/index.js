(function () {
  // Insert code here
  // const userNameInput = ask('Enter username : ');
  // const passwordInput = ask('Enter password : ');
  // const emailInput = ask('Enter email : ');
  // const user = {
  //   userName: userNameInput,
  //   password: passwordInput,
  //   email: emailInput,
  // };
  // console.log(user);
})();

function validateInput(value) {
  if (value === null || value.trim() === '') {
    alert('Invalid input');
    return null;
  }
  return value;
}

function ask(label) {
  let value;

  do {
    value = validateInput(prompt(label));
  } while (!value);

  return value;
}
