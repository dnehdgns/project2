'use strict'
console.log()
let a = 10;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);
let b = a + 20;
console.log(b, typeof a);




let a3 = '300';
a3 = parseInt(a3);
console.log(a3, typeof a3);

let a4 ='200px';
a4 = parseInt(a4);
console.log(a4, typeof a4);
let a5 = a4 + 100;
console.log(a5 , typeof a5)

let a6 ='20살';
a6 = parseInt(a6);
console.log(a6, typeof a6)

// toString(진법)
let c1 = 100;
let d1 = c1.toString();

console.log(d1, typeof d1);

d1 = c1.toString(2);
console.log(d1, typeof d1);

//toFixed (소수점)
let c2 =100.1244233
let d2 = c2.toFixed(3)

console.log(d2, typeof d);