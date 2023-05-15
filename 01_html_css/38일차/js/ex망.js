'use strict';
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li');
let btnIn = document.querySelectorAll('.in')
let btnDel = document.querySelectorAll('.del')
let btnEmpty = document.querySelector('.empty')
let btnReturn = document.querySelector('.return')

let divBag = document.querySelector('.bag')
let ulBag = document.querySelector('.bag ul')

li.forEach((item) => {
    btnDel.forEach((btnItem,idx) => {
        btnItem.addEventListener('click', e => {
            li[idx].remove();
        })
    })
})

btnIn.forEach((btnItem,idx) => {
    btnItem.addEventListener('click', e => {
        let bLi = document.createElement('li')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let Bin = document.createElement('button')
        let Bdel = document.createElement('button')

        bLi.append(img,p,Bin, Bdel);
        img.setAttribute('src', 'images/cat0.jpg');
        p.textContent = `고양이${idx+1}`;
        Bin.textContent = '제거'
        Bin.classList.add('in1');
        Bdel.textContent = '복구'
        Bdel.classList.add('del1');
        ulBag.append(bLi);

        Bin.addEventListener('click', e => {
            bLi.remove();
        })

        Bdel.addEventListener('click', e => {
            Bin.textContent = '담기'
            Bdel.textContent = '삭제'
            Bin.setAttribute('class', 'in')
            Bdel.setAttribute('class', 'del')
            ul.append(bLi);
        })

        btnEmpty.addEventListener('click', () => {
            bLi.remove();
        })

        btnReturn.addEventListener('click', () => {
            bLi.remove();
        })

    })
})
btnReturn.addEventListener('click', e => {
        li.forEach(item => {
            item.remove();
        })
        for(let i=0; i<li.length; i++) {
            ul.append(li[i]);
        }
    })