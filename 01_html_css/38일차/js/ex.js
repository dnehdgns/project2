'use strict';
let ul = document.querySelector('.goods ul')
let li = document.querySelectorAll('.goods li');
let btnIn = document.querySelectorAll('.in')
let btnDel = document.querySelectorAll('.del')
let btnEmpty = document.querySelector('.empty')
let btnReturn = document.querySelector('.return')
let ulBag = document.querySelector('.bag ul')

li.forEach((item, idx) => {
    btnIn[idx].addEventListener('click', e => {
        if(btnIn[idx].textContent === '제거') { li[idx].remove(); }
        else if(btnIn[idx].textContent === '담기') {
                btnIn[idx].textContent = '제거'
                btnDel[idx].textContent = '복구'
                ulBag.append(li[idx]);
            }
    })
    btnDel[idx].addEventListener('click', item => {
        
        if(btnDel[idx].textContent === '삭제') { li[idx].remove(); }
        else if(btnDel[idx].textContent === '복구'){
            ul.append(li[idx]);
            btnIn[idx].textContent = '담기'
            btnDel[idx].textContent = '삭제'
        }
    })
    btnEmpty.addEventListener('click', e => {
        let liBag = document.querySelectorAll('.bag ul li')
        liBag.forEach(item => { item.remove(); })
    })
    btnReturn.addEventListener('click', e => {
        item.remove();
        btnIn[idx].textContent = '담기'
        btnDel[idx].textContent = '삭제'
        for(let i=0; i<li.length; i++) { ul.append(li[i]); }
    }) 
})

