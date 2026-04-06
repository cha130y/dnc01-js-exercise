(function () {
  // Insert code here
  // let inputAmountOfNumbers;
  // while (true) {
  //   inputAmountOfNumbers = Number(
  //     prompt('How many numbers do you want to input? (max 4) : '),
  //   );
  //   if (inputAmountOfNumbers >= 1 && inputAmountOfNumbers <= 4) {
  //     break;
  //   }
  //   alert('Invalid input. Please enter a number between 1 and 4.');
  // }
  // let value = new Array(inputAmountOfNumbers);
  // for (let i = 0; i < inputAmountOfNumbers; i++) {
  //   while (true) {
  //     value[i] = prompt(`Enter number ${i + 1}: `);
  //     if (isValidValue(value[i])) {
  //       break;
  //     }
  //     alert('Invalid input. Please enter a valid number.');
  //   }
  // }
  // let maxValue = max(value);
  // console.log(`The maximum value is: ${maxValue}`);
})();

function isValidValue(value) {
  // return Array.isArray(value) && value.length > 0;
  if (value === null) return false;
  if (value.trim() === '') {
    //alert('Input cannot be empty. Please enter a valid number.');
    return false;
  }
  const num = Number(value);

  return !Number.isNaN(num);
}

function max(value) {
  // if (!isValidValue(value)) return;

  let maxValue = value[0];

  for (let i = 1; i < value.length; i++) {
    if (value[i] > maxValue) {
      maxValue = value[i];
    }
  }
  return maxValue;
}
