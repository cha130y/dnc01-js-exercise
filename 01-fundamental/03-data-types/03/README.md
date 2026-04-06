จงหาผลลัพธ์ของ typeof ดังต่อไปนี้

```js
typeof "x"; //string (result = 'x')
typeof x; //undefined (error)
typeof ``; //string (result = '')
typeof Infinity; //number (result = infinity)
typeof (100 / 0); // number (result = infinity)
typeof (1 + "3"); // string (result = '13')
typeof (1 \* "a"); // error (Uncaught SyntaxError: Invalid or unexpected token)
typeof null; // 'object' (result = null)
```
