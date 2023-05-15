const get = (target) => {
    return document.querySelector(target)
}
const getAll = (target) => {
    return document.querySelectorAll(target)
}

let $li = getAll('#header .nav>.gnb>li')
let $header = get('#header');
let sub = document.querySelectorAll('#header .sub')
let arrBg = ['on0','on1','on2','on3','on4'];
let count_old = 0;
let count = 0

$header.addEventListener('mouseleave', e => {
    for(let i in arrBg) {
        $header.classList.remove(`on${i}`);
    }
})


$li.forEach(item => {
    item.addEventListener('mouseenter', e => {
        sub.forEach( itemS => {
            itemS.classList.remove('on');
        })
        count = e.currentTarget.dataset.num
        sub[count].classList.add('on');
        $header.classList.remove(arrBg[count_old])
        $header.classList.add(arrBg[count])
        count_old = count
        console.log(count)
    })

})