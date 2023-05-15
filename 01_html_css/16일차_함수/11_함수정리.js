'use strict';
// 선언적함수 ( 일반함수 )
function test01() {
    console.log('test01');
}

const test02 = function() {
    console.log('test02')
}

const test03 = () => {
    console.log('test03')
}

test01();
test02();
test03();

function make1(name) {
    console.log(`${name}입니다`);
}

make1('철수');

const make2 = function(age) {
    console.log(`나이는 ${age}살 입니다`)
}

make2(20);

const make3 = addr => {
    console.log(`주소는 ${addr}입니다`)
}

make3('인천')

const sum = (a,b) => {
    return a+b
}

console.log(sum(10,20));
let result = sum(10,20);
console.log(`두수의합은 ${result}이다`);


//즉시 실행함수
(function(){
    console.log('aa');
})();