จงเขียนคำสั่งเพื่อจัดการ error ที่เกิดจากการเรียกใช้ฟังก์ชัน delayedRejection

```js
const delayedRejection = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!'); // Reject the Promise with an error message
  }, 1000); // Delay of 1 second
});
```
