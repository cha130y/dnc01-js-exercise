บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic(); // output : f(x) {return x *42; }
console.log(answer); // * undefine เพราะ ภายใน function magic ใช้ operator * ซึ่ง * (Mathematical operators) จะทำการ convert ค่าไปเป็นตัวเลข => จะได้เป็น function (x) { return Number(x) * Number(42)} x ไม่ได้กำหนดค่า x = undefined; Number(x) = Number(undefined) = NaN => ค่าใดๆ ที่กระทำโดยใช้ Math operator กับ NaN ==> NaN * 42 = NaN ดังนั้น ผลลัพธ์ สุดท้าย คือ NaN
console.log(answer(1337)); // ** f(1337) {return 1337*42} => 56154 ; ใส่ค่า x ลงไปใน function magic ที่เก็บไว้ในตัวแปร answer
console.log(magic(1337)(42)); // *** output : 1764 ; magic(1337)=> magic เป็น parameterless(ไม่รับพารามิตเตอร์) ดังนั้น magic(1337) = magic() ดังนั้นได้เป็น (function(x){ return x *42}(42)) => 42*42 = 1764
```
