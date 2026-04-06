บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function squareNum(num) {
  const result = num * num;
}

console.log(squareNum(2)); // * undefined เพราะ function squareNum ไม่ได้กำหนด return ดังนั้น มันจะ return undefined อัตโนมัติ
```
