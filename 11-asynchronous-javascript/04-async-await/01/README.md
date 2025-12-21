จงเขียนโค้ดด้านล่างในรูปแบบ async/await

```js
const promise = new Promise(function (resolve) {
  resolve(5);
});
promise
  .then(data => data * (data - 1))
  .then(data => data * (data - 1))
  .catch(console.log);
```
