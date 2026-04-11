ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // * Hello, John : browsers treat function declarations inside blocks differently from the official ES6 rule — for web compatibility. Browsers hoist the function to the outer scope.
// the result should be 'ReferenceError: sayHi is not defined' because it function is in block which can not access from outside.

```