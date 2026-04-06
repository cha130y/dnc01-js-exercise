โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน

```js
if (-1 || 0) alert('first'); // execute

if (-1 && 0) alert('second'); // not execute : Boolean(0) = false => xx && false => always false => if(false) => skip

if (null || (-1 && 1)) alert('third'); // execute
```
