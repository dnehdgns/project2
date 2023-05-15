'use strict'

let a = document.querySelectorAll('.main span p a');
let btn2 = document.querySelector('.main span p');
let noticeBar = document.querySelectorAll('.main .inner table tbody tr');
let count = 2;


noticeBar.forEach(item => {
    item.addEventListener("mouseover", e => {
        noticeBar.forEach(bar => {
            bar.classList.remove("on");
        })
        item.classList.add('on');
    })
    item.addEventListener('mouseleave', e => {
        noticeBar.forEach(bar => {
            bar.classList.remove("on");
        })
    })
})

btn2.addEventListener('click', e => {
    e.preventDefault();
})

for(let i=2; i<a.length-2; i++) {
    a[i].addEventListener('click', e => {
        a.forEach(item => {
            item.classList.remove('on');
        })
        a[i].classList.add("on");
        count = i;
    })
}

a[0].addEventListener('click', e => {
    count = 2;
    switchNum()
})

a[1].addEventListener('click', e => {
    count--;
    if(count < 2) { count = 2 } 
    switchNum()
})

a[a.length-2].addEventListener('click', e => {
    count++;
    if(count > 5) { count = 5 }
    switchNum()
})
a[a.length-1].addEventListener('click', e => {
    count = 5;
    switchNum()
})

function switchNum() {
    a.forEach(item => {
        item.classList.remove('on');
    })
    a[count].classList.add('on');
}
