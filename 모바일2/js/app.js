( () => {
    mainInit();
    // subInit();

})()

function mainInit() {

    common(); // 공통내용
    nav_menu(); // 메뉴
    main_visual(); // 비주얼
    news_banner(); // 뉴스영역
}

function common(){}
function nav_menu(){
    let allMenu = document.querySelector('.all-menu');
    let nav = document.querySelector('#nav');
    let bg = document.querySelector('.bg');
    let close = document.querySelector('#nav .close');
    let menua = document.querySelectorAll('#nav .gnb > li > a');
    let menuaul = document.querySelectorAll('#nav .gnb > li > ul');
    let isplay = true;

    allMenu.addEventListener('click', e => {
        nav.classList.add('on');
        bg.classList.add('on');

    })
    close.addEventListener('click', e => {
        nav.classList.remove("on");
        bg.classList.remove('on');
    })
    bg.addEventListener('click', e => {
        nav.classList.remove("on");
        bg.classList.remove('on');
    })
    menua.forEach((item, idx) => {
        item.addEventListener('click', e => {
            if(isplay== true){
                menuaul[idx].classList.add('on');
            } else if (isplay == false) {
                menuaul[idx].classList.remove('on');
            }
            isplay = !isplay
        })
    })
}
function main_visual(){
    var swiper = new Swiper("#mainVisual", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
}
function news_banner(){
    var swiper = new Swiper(".news-banner", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}