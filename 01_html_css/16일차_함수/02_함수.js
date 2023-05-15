'use strict';


function make(x,y) {
    let result_x = 0;
    let result_y = 0;

    if(x!=undefined) {
        result_x += x;
        console.log(`result_x: ${result_x}`);
    }

    if(y!=undefined) {
        result_y += y;
        console.log(`result_y: ${result_y}`);
    }
}


make();
make(100);
make(100,200);