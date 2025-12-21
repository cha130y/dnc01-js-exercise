จงหาผลลัพธ์จากโค้ดด้านล่าง

```js
const promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
```
