const mainInit=()=>{
    common();
    nav_menu();
}
const get = (target) => {
    return document.querySelector(target);
}
const getAll = (target) => {
    return document.querySelectorAll(target);
}
const common = () => {
    let link = getAll('a[href="#"]');
    link.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
        })
    })
}
const nav_menu = () => {
    let $allMenu = get('#header .all-menu');
    let $subMenu = get('#nav');
    let $menua = getAll('#nav .gnb > li > a');
    let $menuul = getAll('#nav .gnb > li > ul');
    let $btnClose = get('#nav .close')
    let $body = get('body');
    let $bg = get('.bg');

    $allMenu.addEventListener('click', e => {
        $subMenu.classList.add('on');
        $bg.classList.add('on');
        $body.style.overflow = 'hidden'
    })

    $bg.addEventListener('click', e=> {
        $subMenu.classList.remove('on');
        $bg.classList.remove('on');
        $body.style.overflow = 'visible'
    })
    
    $btnClose.addEventListener('click', e => {
        $subMenu.classList.remove('on');
        $bg.classList.remove('on');
        $body.style.overflow = 'visible'
    })

    $menua.forEach(item => {
        item.addEventListener('click', e => {
            let el = e.currentTarget;
            $menuul.forEach( menu => {
                menu.classList.remove('on');
            })
            el.nextElementSibling.classList.add('on')
        })
    })
}
( () => {
    mainInit()
})()


// let allMenu = document.querySelector('#header .all-menu')
// let subMenu = document.querySelector('#nav')
// let bg = document.querySelector('.bg');
// let btnClose = document.querySelector('#nav .close')


// allMenu.addEventListener('click', e => {
//     subMenu.classList.add('on');
//     bg.classList.add('on');
// })

// btnClose.addEventListener('click', e => {
//     subMenu.classList.remove('on');
//     bg.classList.remove('on');
// })