'use strict';

let result = 0;
const fn = (num, i=1) => {
    result = num*i;
    // console.log(`${num}단`)
    if(i<=9) {
        console.log(`${num} x ${i} = ${result}`);
        fn(num , i+1);
    } else {
        return;
    }
}

fn(5);