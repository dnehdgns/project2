'use strict';
// 블록스코프 : {} 지역변수: if(){}, for(){}, 함수 스코프
if(true) {
    var a1 = '변수 선언1 var 사용하지 않음';
    let a2 = '변수선언 let'

    function fn1(){
        console.log('선언적함수');
    }

    fn1();

    const fn2 = function() {
        console.log('익명함수');
    }

    fn2();

    const fn3 = () => {
        console.log('화살표함수');
    }

    fn3();

    (function(){
        console.log('즉시 실행함수')
    })()
}

if(true) {
    console.log(`a1 : ${a1}`);
}