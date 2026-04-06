(function () {
  // Insert code here
  // let numInput = prompt('Enter a number : ');
  // console.log('Prime numbers up to ' + numInput + ':');
  // isPrimeNumber(numInput);
})();

function isPrimeNumber(num) {
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i + ' ');
    }
  }
}
