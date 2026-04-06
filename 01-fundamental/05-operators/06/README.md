a มีค่าเท่าไหร่และเพราะอะไร

```js
let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined); // result : 84
// => 1* "4" = 1 * Number(4) = 4
// => 4 + +null = 4 + Number(null) = 4 + 0 = 4
// => 4 + +"" = 4 + Number("") = 4 + 0 = 4
// => 4 - "5" * 2 => do /,* first => '4' - ("5"*2) = '4' - (Number(5)*2) = '4' - 10
// => '4' - 10 = Number(4) - 10 = -6
// => -6 + +(7 + 2 + "" + +!!undifined) = -6 + Number(7+2+""+ Number(!!undifined))
// => -6 + Number(9+""+Number(!!Boolean(unifined)))
// => -6 + Number(9+""+Number(!!Boolean(false)))
// => -6 + Number(9+""+Number(false))
// => -6 + Number(9+""+ 0 )
// => -6 + Number('90' )
// => -6 + 90
// => 84
```
