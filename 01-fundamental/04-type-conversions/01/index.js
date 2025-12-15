(function () {
  // Insert code here
  let a = undefined;
  let b = 2;
  let c = a++;

  const d = String(a); // 'NaN'
  const e = '' + b; // '2'
  const f = `${c}`; // 'NaN'

  // console.log(d, e, f);
  // console.log(d)
  // console.log(e)
  // console.log(f)
})();
