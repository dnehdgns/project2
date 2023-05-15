'use strict';

// const fn1 = () =>  {
//     console.log('테스트1');
//     return;
//     console.log('테스트2');
//     console.log('테스트3');
// }

// let x = fn1();
// console.log(x);

const sum = (a,b) => {

    if(typeof a != "number" || typeof b != "number") {
        console.log('a또는 b가 숫자가 아닙니다');
        return;
    }
    else {
        return a+b;
    }
}

let result = sum('10', '20');
if(result != undefined){
    console.log(`결과 : ${result}`);
}

result = sum(40,50);
console.log(`결과 : ${result}`);