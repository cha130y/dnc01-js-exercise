(function () {
  // Insert code here
  // let scoreInput = prompt('Enter your score : ');
  // if (!isValidValue(scoreInput)) return;
  // let grade = calculateGrade(Number(scoreInput));
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

function calculateGrade(score) {
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  if (score >= 50) return 'D';
  return 'F';
}

// Solution 2 from Ai
// (function () {
//   const score = parseScore(prompt('Enter your score : '));

//   if (score === null) return;

//   const grade = calculateGrade(score);
//   alert(`Your grade is: ${grade}`);
// })();

// function parseScore(value) {
//   if (value === null) {
//     alert('Cancelled');
//     return null;
//   }

//   if (value.trim() === '') {
//     alert('Score is required');
//     return null;
//   }

//   const num = Number(value);

//   if (Number.isNaN(num)) {
//     alert('Score must be a number');
//     return null;
//   }

//   if (num < 0 || num > 100) {
//     alert('Score must be between 0 and 100');
//     return null;
//   }

//   return num;
// }

// function calculateGrade(score) {
//   if (score >= 80) return 'A';
//   if (score >= 70) return 'B';
//   if (score >= 60) return 'C';
//   if (score >= 50) return 'D';
//   return 'F';
// }
