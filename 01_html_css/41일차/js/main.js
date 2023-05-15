'use constrict'

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let li = document.querySelectorAll('.main-banner li');
let paging = document.querySelectorAll('.paging li');
let pause = document.querySelector(".pause")
let start = document.querySelector(".start")

let timeId = null, count=0, oldCount=0, newCount = 2;

// timeId = setInterval(roll, 4000);

function rollroll() {
    paging.forEach(item => {
        item.classList.remove('on');
    })
    paging[count].classList.add('on');
}

function roll() {
    count++;
    if(count == 2) { newCount = 0}
    newCount = count + 1;
    if(count > 2) { count = 0 }
    rollroll();
    li[oldCount].style.zIndex = '1'
    li[oldCount].style.left = '-100%'
    li[count].style.zIndex = '10'
    li[count].style.left = '0';
    li[newCount].style.zIndex = '1' 
    li[newCount].style.left = '100%' 

    console.log('oldcount : ' + oldCount);
    console.log('count : ' + count);
    console.log('newcount : ' + newCount);

    oldCount = count;
}

next.addEventListener('click', e => {
    roll();
})
prev.addEventListener('click', e => {
    count--;
    if(count == 0 ) { newCount = 2}
    if(count < 0) { count = 2 }
    rollroll();
    li[oldCount].style.zIndex = '1'
    li[oldCount].style.left = '100%'
    li[count].style.zIndex = '10'
    li[count].style.left = '0';
    li[newCount].style.zIndex = '1'
    li[newCount].style.left = '-100%'

    oldCount = count;
    console.log(count);
})

pause.addEventListener('click', e => {
    clearInterval(timeId);
    timeId = null
})

start.addEventListener('click', e => {
    if(timeId == null) {
        timeId = setInterval(roll, 4000);
    }
})