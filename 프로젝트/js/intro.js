'use strict'

let introLi = document.querySelectorAll('.intro .inner ul li');

introLi.forEach(item => {
    item.addEventListener('mouseover', e => {
        e.currentTarget.classList.add('on');
    })
    item.addEventListener('mouseleave', e => {
        item.classList.remove("on");
    })
})