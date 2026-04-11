บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const sender = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, "Sarah"); // * From Matt to Sarah : pass parameter
sendTo(null); // ** From null to undefined : 1st parameter is null => string(null) = 'null' ; 2nd parameter is empty => undefined => string(undefined) = 'undefined'
```

```js
const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** From CC to Max : JavaScript matches arguments by position 'Max' match with 'to' variable not 'from' variable
sendTo("Ben", "Jay"); // **** From Jay to Ben
```
