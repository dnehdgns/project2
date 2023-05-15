'use strict';


function make(x=1,y=10) { // 매개변수 초기화
    console.log(`x: ${x}, y: ${y}`);
}


make();
make(100);
make(100,200);