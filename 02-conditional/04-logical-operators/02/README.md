โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน

```js
if (-1 || 0) alert('first'); // do

if (-1 && 0) alert('second'); // not

if (null || (-1 && 1)) alert('third'); // do
```
