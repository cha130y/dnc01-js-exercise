(function () {
  // Insert code here
  // let secretNumber;
  // while (true) {
  //   let inputPlayer1 = prompt('Player 1, enter a number between 1 and 99:');
  //   const validNumberPlayer1 = validateNumber(inputPlayer1);
  //   if (validNumberPlayer1 === null) {
  //     alert('Invalid input. Please enter a number between 1 and 99.');
  //     continue;
  //   }
  //   secretNumber = validNumberPlayer1;
  //   break;
  // }
  // // } else {
  // //   while (true) {
  // //     let inputPlayer2 = prompt('Player 2, guess a number of Player 1:');
  // //     const validNumberPlayer2 = validateNumber(inputPlayer2);
  // //     if (validNumberPlayer1 === validNumberPlayer2) {
  // //       alert(`Correct! Number is ${validNumberPlayer1}`);
  // //       break;
  // //     }
  // //   }
  // // }
  // while (true) {
  //   let inputPlayer2 = prompt('Player 2, guess a number of Player 1:');
  //   const validNumberPlayer2 = validateNumber(inputPlayer2);
  //   if (validNumberPlayer2 === secretNumber) {
  //     alert(`Correct! Number is ${secretNumber}`);
  //     break;
  //   }
  //   alert('Wrong guess. Try again!');
  // }
})();

function validateNumber(value) {
  if (value === null || value.trim() === '') return null;

  const number = Number(value);
  if (Number.isNaN(number) || number <= 1 || number >= 99) return null;

  return number;
}
