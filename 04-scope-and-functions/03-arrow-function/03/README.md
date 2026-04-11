บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefine : Arrow function use curly braces {} without return keyword JavaScript automatically return undefined.
```

```js
const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** 28.274333882308138 : Arrow function no curly braces {} JavaScript automatically return the expression
```
