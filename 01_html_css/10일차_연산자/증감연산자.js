'use strict'

// ++ , --

// num++ 후위 ++num 전위 js만 사용하면 전위후위차이 x


let a = 10;
a++;
++a;
console.log(a);


let num1 = 10;
let num2 = num1++;

console.log('num1:%d, num2:%d',num1,num2);

let num3 = 10;
let num4 = ++num3;

console.log('num3:%d, num4:%d',num3,num4);