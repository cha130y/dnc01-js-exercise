โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่

```js
let i = 0;
while (++i < 5) alert(i);
```

```js
let i = 0;
while (i++ < 5) alert(i);
```

<!-- ต่างกัน   case ++i result => 1, 2, 3, 4 ; Note : increment -> check -> run
            case i++ result => 1, 2, 3, 4, 5 ; Note : check -> increment -> run  -->

<!-- Note : Avoid increment logic inside condition bug can happen>
use this version 

let i = 0;
while (i < 5) {
  i++;
  alert(i);
}
