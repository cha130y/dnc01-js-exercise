- จงใช้ promise chaining กับ promise object ด้านล่าง โดยให้แสดงผลลัพธ์สุดท้ายใน console มีค่าเป็น 16
- ผลลัพธ์ใน console แสดงดังนี้
  1
  2
  4
  8
  16

```js
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
});
```
