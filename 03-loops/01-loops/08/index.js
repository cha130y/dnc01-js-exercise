(function () {
  // Insert code here
  // let sum = 0;
  // while (true) {
  //   let input = prompt('Enter a number:');
  //   const validNumber = validateNumber(input);
  //   if (validNumber === null) break;
  //   sum += validNumber;
  // }
  // alert(`Sum: ${sum}`);
})();

function validateNumber(value) {
  if (value === null || value.trim() === '') return null;

  const number = Number(value);
  if (Number.isNaN(number) || number <= 0) return null;

  return number;
}
