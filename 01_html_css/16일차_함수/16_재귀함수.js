'use strict';

let cnt = 1;

const fn = () => {
    console.log(`${cnt}번 호출`);
    cnt++;
    if(cnt>5){return;}
    fn();
}
fn();