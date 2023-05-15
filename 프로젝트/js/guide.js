let guidePic = document.querySelector('.guide .inner .img-box .bg img');
let guideBtn = document.querySelectorAll('.guide .inner .img-box .btn-group button');
let guideP = document.querySelectorAll('.guide .inner .check-box span p');
let scale = 1 ;
let oldLeft = [], oldTop = [];
let timerId = null , isBlocked= false ;
let upCount = 5, downCount = 0;

guideBtn.forEach((item, idx) => {
    oldLeft[idx] = parseInt(getComputedStyle(item).left);
    oldTop[idx] = parseInt(getComputedStyle(item).top);
})

guidePic.addEventListener('wheel', function(e) {
    e.preventDefault();
    clearTimeout(timerId);
    timerId = null;
    timerId = setTimeout(function() {
        isBlocked = false;
    }, 150);
    if (isBlocked === true) return false;
    isBlocked = true;
    let delta = e.deltaY;
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(0.125, scale), 4);
    if(scale < 0.49) { scale = 0.5 }
    else if (scale > 1) { scale = 1; }

    if (delta < 0 && upCount < 5) {
        zoomIn()
        upCount++;
        downCount--;
        if(downCount < 0) { downCount = 0}
        if(upCount > 5) { upCount = 5}
    } else if (delta > 0 && downCount < 5) {
        zoomOut()
        upCount--;
        downCount++;
        if(upCount < 0) { upCount = 0}
        if(downCount > 5) { downCount = 5}
    }
    
    for(let i=0; i<guideBtn.length; i++) {
        guideBtn[i].style.left = `${oldLeft[i]}px`;
        guideBtn[i].style.top = `${oldTop[i]}px`;
    }
    guidePic.style.transform = `scale(${scale})`;
  }, {passive: false});
function zoomIn() {
    for(let i=0; i<guideBtn.length; i++) {
        if(i==0){
            oldLeft[i] -= 18;
            oldTop[i] -= 18;
        } else if (i==1){
            oldLeft[i] -= 40;
            oldTop[i] += 10;
        } else if (i==2){
            oldLeft[i] += 34;
            oldTop[i] -= 30;
        } else if (i==3){
            oldLeft[i] += 34;
            oldTop[i] -= 12;
        } else if (i==4){
            oldLeft[i] += 33;
            oldTop[i] += 12;
        } else if (i==5){
            oldLeft[i] += 33;
            oldTop[i] += 30;
        } else if (i==6) {
            oldLeft[i] -= 10;
            oldTop[i] += 30;
        }
    }
}
function zoomOut() {
    for(let i=0; i<guideBtn.length; i++) {
        if(i==0) {
            oldLeft[i] += 18;
            oldTop[i] += 18;
        } else if (i==1) {
            oldLeft[i] += 40;
            oldTop[i] -= 10;
        } else if (i==2){
            oldLeft[i] -= 34;
            oldTop[i] += 30;
        } else if (i==3){
            oldLeft[i] -= 34;
            oldTop[i] += 12;
        } else if (i==4){
            oldLeft[i] -= 33;
            oldTop[i] -= 12;
        } else if (i==5){
            oldLeft[i] -= 33;
            oldTop[i] -= 30;
        } else if (i==6) {
            oldLeft[i] += 10;
            oldTop[i] -= 30;
        }
    }
}

guideBtn.forEach((item, idx) => {
    item.addEventListener('mouseover', e => { 
        guideBtn.forEach(classItem => { 
            classItem.classList.remove('on')
        })
        item.classList.add('on');
    })
    item.addEventListener('mouseleave', e => { 
        guideBtn.forEach(classItem => { 
            classItem.classList.remove('on') 
        }) 
    })
    item.addEventListener('click', e => {
        guideP.forEach(item => { item.classList.remove('on'); })
        guideBtn.forEach(item => { item.classList.remove('clicked'); })
        guideP[idx].classList.add('on')
        guideBtn[idx].classList.add('clicked');
    })
})

guideP.forEach((item, idx) => {
    item.addEventListener('click', e => {
        guideP.forEach(item => { item.classList.remove('on'); })
        guideBtn.forEach(item => { item.classList.remove('clicked'); })
        guideP[idx].classList.add('on')
        guideBtn[idx].classList.add('clicked');
    })
})