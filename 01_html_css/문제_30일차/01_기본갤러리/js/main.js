let Lpic = document.querySelector('.left img');
let Lpic_ex = document.querySelector('.left p') 
let Rpic = document.querySelectorAll('.right img'); 
let right = document.querySelectorAll('.right li');
let current_p = document.querySelector('.right p span.current');
let timeId = null, interval = 4000;
let count = 0, rNum=0;
current_p.textContent = 1;

function roll() {
    count++;
    if(count == 24) { 
        right[count-1].classList.remove('on');
        right[0].classList.add('on');
     }
    if(count>23) { count = 0;}
    Lpic.setAttribute('src', `images/img${count}.jpg`);
    current_p.textContent = count+1;
    Lpic_ex.textContent = `imageView${count+1}`;
    right[count-1].classList.remove('on');
    right[count].classList.add('on');
}

timeId = setInterval(roll, interval)

Rpic.forEach(item => {
    item.addEventListener('click', rItem => {
        right.forEach(r_Item => {
            r_Item.classList.remove('on');
            right[rItem.target.dataset.id].classList.add('on');
        })
        rNum = Number(rItem.target.dataset.id);
        Lpic.setAttribute('src', `images/img${rNum}.jpg`);
        current_p.textContent = rNum+1;
        Lpic_ex.textContent = `imageView${rNum+1}`;
        count = rNum;
    })
})
