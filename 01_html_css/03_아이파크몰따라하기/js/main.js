let ipark = document.querySelectorAll('div ul li span');
let ipark_on = document.querySelector('div ul li span.on');
let iparkH3 = document.querySelectorAll('div ul li span h3');
let iparkP = document.querySelectorAll('div ul li span p');
let pic = document.querySelector('div ul img');
let btn = document.querySelectorAll('button');
let num = 0;
let timer = null;


function fade () {
    pic.animate([
        {opacity : 0},
        {opacity : 1}
    ],400)
}

function make() {
    num++;
    if(num>3) { num=0 };
    ipark.forEach(park_i => {
        park_i.classList.remove('on')
    })
    ipark[num].classList.add('on');
    pic.setAttribute('src', `images/cat${num}.jpg`);
    fade();
}

timer = setInterval(make , 3000);

ipark.forEach(item => {
    item.addEventListener('click', item_p => {
        ipark.forEach(park_i => {
            park_i.classList.remove('on')
        })
        num = Number(item_p.target.dataset.id);
        ipark[num].classList.add('on');
        pic.setAttribute('src', `images/cat${num}.jpg`);
        fade()
    })
})

btn[0].addEventListener('click', e => {

    ipark.forEach(item => {
        item.classList.remove('on');
    })
    num -= 1;
    if(num<0) {num=3}
    ipark[num].classList.add('on');
    pic.setAttribute('src', `images/cat${num}.jpg`);
    fade()

    clearInterval(timer);
    timer = null;
})
btn[1].addEventListener('click', e => {
    if(timer == null) {
        timer = setInterval(make , 3000);
    }

    ipark.forEach(item => {
        item.classList.remove('on');
    })
    num += 1;
    console.log(num);
    if(num>3) {num=0}
    ipark[num].classList.add('on');
    pic.setAttribute('src', `images/cat${num}.jpg`);
    fade()
})