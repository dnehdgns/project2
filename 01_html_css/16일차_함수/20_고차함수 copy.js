'use strict';

function make() {
    return function(){
        console.log('인사하기');
    }
}

let x = make();
x();


console.log();


function make1(name) {
    return function(y){
        // console.log('인사하기');
        console.log(`${name}에게 ${y}하기`)
    }
}

let x1 = make1('고양이');
x1('안녕');


function make2(name) {
    function innerFn(hi){
        console.log(`${name} ${hi}`)
    }
    return innerFn;
}

let x2 = make2('강아지');
x2('안녕');

