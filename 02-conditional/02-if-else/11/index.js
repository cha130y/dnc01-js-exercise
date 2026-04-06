(function () {
  // Insert code here
  // let scoreInput = prompt('Enter your score : ');
  // if (!isValidValue(scoreInput)) return;
  // let score = Number(scoreInput);
  // let grade =
  //   score >= 80
  //     ? 'A'
  //     : score >= 70
  //       ? 'B'
  //       : score >= 60
  //         ? 'C'
  //         : score >= 50
  //           ? 'D'
  //           : 'F';
  // alert(`Your grade is: ${grade}`);
})();

function isValidValue(value) {
  if (value === null) {
    alert('Cancelled');
    return false;
  }

  if (value.trim() === '') {
    alert('score is required');
    return false;
  }

  const num = Number(value);

  if (Number.isNaN(num)) {
    alert('score must be a number');
    return false;
  }

  if (num < 0 || num > 100) {
    alert('score must be between 0 and 100');
    return false;
  }
  return true;
}
