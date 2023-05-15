'use strict';

// 값(함수) -> 매개변수 전달 : 콜백함수

function make( callback ) {
    let x = callback();
    console.log(`${x} 철수야`);
}
function fn1() {
    return '안녕';
}
function fn2() {
    return '잘가';
}

make(fn1);
make(fn2);

console.log()

const fn3 = (name) => {
    console.log(`${name} - 콜백함수호출`);
}
const make1 = ( callback ) => {
    callback('고양이');
}

make1(fn3);