บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everybody : message(local variable) is re-assigned in variable scope it will not overwrite the original variable(global scope)
}

logMessage(message);
console.log(message); // ** Welcome to thailand : local variable will be destroyed after finish function
```

```js
let name = "John";

function sayHi(input) {
  console.log(name); // *** john : no re-assign value
  name = input;
}

sayHi();
console.log(name); // **** undefined : no pass parameter at sayHi() => input = undefined => name = undefined => console.log(undefined) = 'undefined'
```
