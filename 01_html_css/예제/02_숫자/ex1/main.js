'use strict'

let dom = document.querySelectorAll('.sns li strong');
let end, step;
let start = 0, count = 0, speed = 250;


dom.forEach(item => {
    item.textContent = start;

    const counter = () => {
        end = item.dataset.num;
        count = Number(item.textContent);
        step = end/speed;

        if(count < end) {
            item.textContent = count+ step;
            setTimeout(counter , 1);
        } else {
            item.textContent = end;
        }
    }
    counter();
    
    // count = Number(item.textContent);
    // step = end/speed;

    // console.log(count);
    // console.log(end);
    // if(count < end) {
    //     item.textContent = count+ step;
    //     setTimeout(counter , 1);
    // } else {
    //     item.textContent = end;
    // }
})