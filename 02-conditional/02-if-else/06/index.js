(function () {
  // Insert code here
  // let input1 = prompt('Enter first number : ');

  // if (!isValidValue(input1)) return;

  // let input2 = prompt('Enter second number : ');
  // if (!isValidValue(input2)) return;

  // let sum = Number(input1) + Number(input2);
  // alert(`The sum of ${input1} and ${input2} is ${sum}`);

  // if(input1 || input2 === null) {
  //   alert('Cancelled');
  // } else if(input1.trim() === '' || input2.trim() === ''){
  //   alert('Invalid input');
  // } else if(Number.isNaN(Number(input1)) || Number.isNaN(Number(input2))) {
  //   alert('Invalid input');
  // } else {
  //   let sum = input1 + input2;
  //   alert(`The sum of ${input1} and ${input2} is ${sum}`);
  // }
})();

// (function isValidValue(value1, value2) {
//   // Validate the input value
// if(value1 || value2 === null) {
//     alert('Cancelled');
//   } else if(value1.trim() === '' || value2.trim() === ''){
//     alert('Invalid input');
//   } else (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2)))
//     alert('Invalid input');

function isValidValue(value) {
  // Validate the input value

  if (value === null) {
    alert('Cancelled');
    return false;
  }

  if (value.trim() === '') {
    alert('Invalid input');
    return false;
  }

  if (Number.isNaN(Number(value))) {
    alert('Invalid number');
    return false;
  }
  return true;
}
