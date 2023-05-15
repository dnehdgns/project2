const get = (target) => {
    return document.querySelector(target)
}
const getAll = (target) => {
    return document.querySelectorAll(target)
}

let $li = getAll('#header .nav>.gnb>li')
let $header = get('#header');
let sub = document.querySelectorAll('#header .sub')

$header.addEventListener('mouseenter', e => {
    $header.classList.add('on');
})
$header.addEventListener('mouseleave', e => {
    $header.classList.remove('on');
})

$li.forEach(item => {
    item.addEventListener('mouseenter', e => {
        sub.forEach( itemS => {
            itemS.classList.remove('on');
        })
        sub[e.currentTarget.dataset.num].classList.add('on');
    })
    item.addEventListener('mouseleave', e => {
        sub.classList.remove('on');
    })
})