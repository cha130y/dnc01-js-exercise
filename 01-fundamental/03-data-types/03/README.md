จงหาผลลัพธ์ของ typeof ดังต่อไปนี้

```js
typeof 'x'; // 'string'
typeof x; // 'undefined'
typeof ``; // 'string'
typeof Infinity; // 'number'
typeof (100 / 0); // 'number'
typeof (1 + '3'); // '13' ==> 'string'
typeof (1 * 'a'); // 'NaN' ==> 'number'
typeof null; // 'object'
```
