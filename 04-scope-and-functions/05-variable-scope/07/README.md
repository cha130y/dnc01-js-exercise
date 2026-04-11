ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let x = 1;
function func() {
  console.log(x); // * Uncaught ReferenceError: Cannot access 'x' before initialization ; there is local variable x (same name as global variable) JavaScript see local x not the global one => ReferenceError , but if change local variable name to other name the result display global x value ('1')
  let x = 2;
}
func();
```