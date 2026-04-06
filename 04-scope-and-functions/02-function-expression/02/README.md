บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal('Execute modal'); // * result : "Execute modal" =>เพราะ ไม่มี () ต่อท้าย alert = Pass the function เก็บ function alert ไว้ในตัวแปร showModal จากนั้นทำการเรียกใช้
```

```js
const showModal = alert();
showModal('Execute modal'); // ** Result : pop-up alert ไม่โชว์อะไร และเกิด error shomodal is not a function => เพราะมี () หลัง alert = รันผลลัพท์ function ทันที alert() = undefined => const showModal = undefined => undefined("Execute modal") => TypeError: showModal is not a function
```
