'use strict'

// && and 그리고, || or 또는, ! not - true/false
let test =true;

// test = true && true;
// test = true && false;
// test = false && true;
// test = false && false;

// test = true || true;
// test = true || false;
// test = false || false;

test = !test

console.log('결과: %s',test);

let a =10, b = 20, c = 30, isPlay = false, result = null;

result = (a>b)&&(a>c); // false
console.log('(a>b)&&(a>c) : %s', result);


