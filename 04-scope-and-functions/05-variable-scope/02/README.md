บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(name) {
  let name = "Guest";
  console.log(name); // * Uncaught SyntaxError: Identifier 'name' has already been declared
}

sayHi("Jim");
```
