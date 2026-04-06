บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
  if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * ไม่ได้ passed parameter ดังนั้นจึงไม่เข้าเงื่อนไข (false) และ undefined เพราะไม่ได้ระบุ return type ดังนั้น return => undefined
console.log(sayHi(10)); // ** Hi kid : เพราะเข้าเงือนไข age < 12  และ undefined เพราะไม่ได้ระบุ return type ดังนั้น return => undefined
```

```js
function sayHi(name) {
  if (name) {
    alert('Hi ' + name);
    return;
  } else {
    return 'Who are you';
  }
}
console.log(sayHi('John')); // *** Hi John เพราะ Boolean(John) = true และ undefined เพราะ return; = return undefined
console.log(sayHi()); // **** Who you are เพราะ Boolean() = false
```
