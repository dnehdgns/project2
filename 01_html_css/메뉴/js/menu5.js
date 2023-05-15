const get = (target) => {
    return document.querySelector(target)
}
const getAll = (target) => {
    return document.querySelectorAll(target)
}

let $li = getAll('#header .nav>.gnb>li')
let $header = get('#header');

$header.addEventListener('mouseenter', e => {
    $header.classList.add('on');
})
$header.addEventListener('mouseleave', e => {
    $header.classList.remove('on');
})