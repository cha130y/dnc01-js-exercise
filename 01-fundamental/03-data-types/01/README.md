จงหาผลลัพธ์ในบรรทัดคำสั่ง console.log ทั้งหมด

```js
const country = 'Thailand'; //Thailand
const continent = 'Asia'; //Asia
console.log(`number is ${2}`); //number is 2
console.log(`result is ${1 + 3}`); //result is 4
console.log(`I live in ${country}`); //I live in Thailand
console.log(`I live in ${country}, ${continent}`); //I live in Thailand, Asia ;
console.log(`I live in ${country + ', ' + continent}`); //I live in Thailand, Asia ; ไม่นับช่องว่างระหว่าง operator + แต่นับช่องว่าง(1ช่อง)หลัง ', '
console.log(`I live in ${'country, continent'}`); //I live in contry, continent
```
