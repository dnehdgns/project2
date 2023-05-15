let txtArr = [];
txtArr[0] = '얼마전 식도 관련 질환으로 수술받고 퇴원한 환자입니다. 입원해 있는 동안 김도훈 교수님은 회진때마다 궁금한 점에 대해 시원시원하게 대답해 주시고 걱정했던 부분들을 사전에 친절하게 설명해 주셨습니다. 교수님께서 신경써서 수술해주신 덕분에 연하곤란으로 2달동안 음식 섭취가 힘들었었는데 많이 회복되어 지금은 잘 먹고 있습니다. 담당 레지던트 선생님이셨던 진태양 선생님도 병실에 수시로 들러 친절하게 설명해주시고 불편한 부분들을 빠르게 해결해 주셨습니다. 김도훈 교수님, 진태양 선생님... 더보기'

txtArr[1] = '어머니께서 담석으로 입원하셨습니다. 과거에 위 절제수를 받아서 담석 제거절차도 복잡했구요, 내과와 외과를 번갈아 가셔야했습니다. 코로나 때문에 보호자 1인만 드나들 수 있고 면회는 아예 금지 되었습니다. 저희는 간병인이 병원 상황을 전해 주었습니다. 어머니는 고령에 몹시 불안해 하셨으나 두 선생님과 간호사님들, 그리고 여러 관계자님들 덕분에 무사히 수술을 마치고 지금은 퇴원하여 회복중에 있습니다. 두 교수님 직접 뵙고 인사드려야 마땅하나 아쉬운대로 이렇게 글로나마 감사를 드리겠습니다... 더보기'

txtArr[2] = '안녕 하십니까. 저는 임영규 환자 가족입니다. 저희아버지 께서는 갑작스러운 심장 통증으로 부산 모 대학병원에 진료를 받고 잇었습니다. 하지만 상태가 호전되지 않아서 개복 수술을 해야 한다는 말을 듣고 연세가 있으신 아버지께서 너무나도 불안해하셨는데 고민 끝에 대한민국 최고의 의료진과 간호팀이 계시는 서울 아산병원에 입원해서 다시 진료를 받아보기로 결심했습니다. 지난주 아무런 연고가 없는 서울에 올라와 최고의 의료진께 어려운 시술을 잘받고 최고의 간호팀에게 회복을 기다리면서 간호를 받고있습... 더보기';

let doctor = ['직원 : 유문원', '직원 : 송태준', '직원 : 지민아'];
let partDoc = ['위장관외과, 안병원, 위암센터', '소화기내과,담도 - 췌장센터, 소화기내시경센터', '심장병원 간호팀'];

let numStrong = document.querySelectorAll('.inner ul.subText li strong');
let main = document.querySelector('.mainText p');
let strong = document.querySelector('.mainText li p strong');
let em = document.querySelector('.mainText li p em')
let btn = document.querySelectorAll('.inner span button');
let start = 0, speed =250;
let end = 0 , count = 0;
let check = 0, step = 0;

let timeId = null;

timeId = setInterval(roll, 3000); 
function roll() {
    count++;
    if(count>2) count=0;
    btn.forEach(item => {
        item.classList.remove('on');
    })
    make(count);
}


function make(num) {
    btn[num].classList.add('on');
    main.innerHTML = txtArr[num]
    strong.textContent = doctor[num];
    em.textContent = partDoc[num];
}

for(let i=0; i<3; i++){
        btn[i].addEventListener('click', e => {
        btn.forEach(item => {
            item.classList.remove('on');
        })
        count = e.currentTarget.dataset.id;
        make(i);
        console.log(count);
    })
}