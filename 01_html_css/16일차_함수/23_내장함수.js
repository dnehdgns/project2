'use strict';

let a = 100;
let b = 100.123;
let c = 'Not a Nuber';
let d = 50*10;
let e = ' ';
let f = true;

// isnan : 숫자, 문자판별

console.log(`출력: ${typeof a}, ${isNaN(a)}`);
console.log(`출력: ${typeof b}, ${isNaN(b)}`);
console.log(`출력: ${typeof c}, ${isNaN(c)}`);
console.log(`출력: ${typeof d}, ${isNaN(d)}`);
console.log(`출력: ${typeof e}, ${isNaN(e)}`);
console.log(`출력: ${typeof f}, ${isNaN(f)}`);

console.log();

let str1 = a+c;
let str2 = String(a)+String(b);
console.log(str2);
let str3 = Number(str2);
console.log(`출력: ${typeof str1}, ${isNaN(str1)}`);
console.log(`출력: ${typeof str2}, ${isNaN(str2)}`);
console.log(`출력: ${typeof str3}, ${isNaN(str3)}`);