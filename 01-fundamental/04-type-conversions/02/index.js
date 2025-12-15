(function () {
  // Insert code here
  let a = undefined;
  let b = null;
  let c = b + '4 2'; // 'null4 2'
  // console.log(c);

  const d = Number(a); // NaN
  const e = +b; // 0
  const f = c * 1; // NaN
  // console.log(d, e, f);
})();
