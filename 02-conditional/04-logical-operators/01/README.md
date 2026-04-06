คำสั่ง alert ในแต่ละบรรทัดจะแสดงค่าเป็นอะไรบ้าง

```js
alert(null || 2 || undefined); // result : 2
alert(alert(1) || 2 || alert(3)); // result : 1 and 2
alert(1 && null && 2); // result : null
alert(alert(1) && alert(2)); //result : 1 and undefined => alert(1) → shows 1 && stops here  → alert(2) skipped alert(undefined) final result 1 and undefined Note : alert() always returns undefined
alert(null || (2 && 3) || 4); // result : 3
```
