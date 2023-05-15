const more = document.querySelector('.main  .more .btn');
const list = document.querySelector('.main .con-box .list');
const popup = document.querySelector('.popup-gallery');
const bg= document.querySelector('.bg');
const total = document.querySelector('.popup-gallery .gallelry-header .total-img');
const close = document.querySelector('.close');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let imgurl = '', bigImg = '', current = 0;
let count = 0; totalImage = 24;

showimg();
function showimg() {
    if(count < totalImage) {
        for(let i=0; i<8; i++){
            const li = document.createElement('li');
            const img = document.createElement('img');
    
            img.setAttribute("src", 'images/photo'+ count + '.jpg');
            img.setAttribute("data-id", count);
            li.append(img);
            list.append(li);
            count++;
        }
    }
}

close.addEventListener("click", e => {
    popup.classList.remove('show')
})
//t사진 클릭
list.addEventListener("click", e=> {
    let el = e.target;
    bimg = popup.querySelector('img');
    bg.getElementsByClassName.display = 'lock';
    popup.classList.add('show')
    current = el.dataset.id;
    //이미지변경
    banner();
})

function banner() {
    bimg.setAttribute('src', 'images/photo'+current+'.jpg');
    bimg.animate([
        {opacity : 0},
        {opacity : 1}
    ],400);
    total.innerHTML = `image <span>${Number(current)+1}</span> of <strong>${totalImage}</strong>`;
}

more.addEventListener("click", e => {
    showimg()
})

prev.addEventListener("click", e => {
    current--
    if(current < 0) { current = 23}
    banner();
})
next.addEventListener("click", e => {
    current++
    if (current > 23) { current = 0}
    banner();
})