'use strict';

let n1 = '100';
let n2 = '200px';
let n3 = '123.456';
let n4 = '202동';
let n5 = '20살';

n1 = Number(n1);
n2 = parseInt(n2);
// n3 = parseFloat(n3);
n3 = parseInt(n3);
n4 = parseInt(n4);
n5 = parseInt(n5);

console.log(`출력 : ${n1}, ${typeof n1}`);
console.log(`출력 : ${n2}, ${typeof n2}`);
console.log(`출력 : ${n3}, ${typeof n3}`);
console.log(`출력 : ${n4}, ${typeof n4}`);
console.log(`출력 : ${n5}, ${typeof n5}`);

