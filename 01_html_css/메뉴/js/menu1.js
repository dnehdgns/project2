const get = (target) => {
    return document.querySelector(target)
}
const getAll = (target) => {
    return document.querySelectorAll(target)
}

let $li = getAll('#header .nav>.gnb>li')
let $ul = getAll('#header .nav .gnb li ul');
let $header = get('#header');

$li.forEach(item => {
    item.addEventListener('mouseenter', e => {
        let current = e.currentTarget
        current.children[1].classList.add('on')
    })
    item.addEventListener('mouseleave', e => {
        let current = e.currentTarget
        current.children[1].classList.remove('on')
    })
})