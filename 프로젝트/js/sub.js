const get = (target) => { return document.querySelector(target) }
const getAll = (target) => { return document.querySelectorAll(target) }

let $header = get('#header');
let $gnb = get('#header .gnb');
let $gnbM = getAll('#header .gnb .gnbM')
let $li = getAll('#header .gnb > li');
let $gnbSub = getAll('#header .gnb .sub');
let $rolling = getAll('.main .rolling');
let $pgLi = getAll('.paging li');
let $pgA = getAll('.paging a');
let $logo = get('#header h1 img');

$li.forEach( (item, idx) => {
    item.addEventListener('mouseenter', e => {
        $header.classList.add('roll');
        $gnb.classList.add('roll');

        $gnbM.forEach(gnbItem => {
            gnbItem.classList.add('roll');
            gnbItem.classList.remove('on');
        });
        e.currentTarget.firstElementChild.classList.add('on'); // gnbM

        $gnbSub.forEach(subItem => {
            subItem.classList.remove('roll');
        });
        e.currentTarget.firstElementChild.nextElementSibling.classList.add('roll'); // sub sub0, sub1..
    });
    $header.addEventListener('mouseleave', e => {
        e.currentTarget.classList.remove('roll');
        $gnbSub[idx].classList.remove('roll');
        $gnb.classList.remove('roll');
        $gnbM.forEach(gnbItem => {
            gnbItem.classList.remove('roll');
            gnbItem.classList.remove('on');
        });
    });
});
// 메인 메뉴

// 공지사항
function notice() {

    let a = document.querySelectorAll('.notice span p a');
    let noticeP = document.querySelector('.notice span p');
    let noticeBar = document.querySelectorAll('.notice .inner table tbody tr');
    let count = 2;
    let $shareIcon = getAll('.title-wrap .icon-box li p');
    let $snsBox = get('.title-wrap .icon-box li .sns-box');
    let $shareBg = get('.title-wrap .bg');

    noticeBar.forEach(item => {
        item.addEventListener("mouseover", e => {
            noticeBar.forEach(bar => {
                bar.classList.remove("on");
            })
            item.classList.add('on');
        })
        item.addEventListener('mouseleave', e => {
            noticeBar.forEach(bar => {
                bar.classList.remove("on");
            })
        })
    })

    noticeP.addEventListener('click', e => {
        e.preventDefault();
    })

    for(let i=2; i<a.length-2; i++) {
        a[i].addEventListener('click', e => {
            a.forEach(item => {
                item.classList.remove('on');
            })
            a[i].classList.add("on");
            count = i;
        })
    }

    a[0].addEventListener('click', e => {
        count = 2;
        switchNum()
    })

    a[1].addEventListener('click', e => {
        count--;
        if(count < 2) { count = 2 } 
        switchNum()
    })

    a[a.length-2].addEventListener('click', e => {
        count++;
        if(count > a.length-3) { count = a.length-3 }
        switchNum()
    })
    a[a.length-1].addEventListener('click', e => {
        count = a.length-3;
        switchNum()
    })

    function switchNum() {
        a.forEach(item => {
            item.classList.remove('on');
        })
        a[count].classList.add('on');
    };

    //타이틀박스 공유 아이콘 All
    $shareIcon.forEach(shareItem => {
        shareItem.addEventListener('mouseenter',e => e.currentTarget.classList.add('on'));
        shareItem.addEventListener('mouseleave',e=> e.currentTarget.classList.remove('on'));
    })

    //타이틀박스 sns공유 아이콘 팝업
    $shareIcon[0].addEventListener('click',e=>{
        $snsBox.classList.add('on');
        $shareBg.classList.add('on');
    })
    $shareBg.addEventListener('click',e=>{
        $shareBg.classList.remove('on');
        $snsBox.classList.remove('on');
    })
    $shareIcon[1].addEventListener('click',e=> prompt('이 글의 URL 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요.', window.location.href));   
    $shareIcon[2].addEventListener('click',e=> window.print()); 
}

// 병원 소개
function intro() {

    let introLi = document.querySelectorAll('.intro .inner ul li');

    introLi.forEach(item => {
        item.addEventListener('mouseover', e => {
            e.currentTarget.classList.add('on');
        })
        item.addEventListener('mouseleave', e => {
            item.classList.remove("on");
        })
    })
}

// 병원 안내도
function guide() {
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
}