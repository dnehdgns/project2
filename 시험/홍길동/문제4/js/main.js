let img = document.querySelector('.inner img');
let btn = document.querySelectorAll('.inner button');
let span = document.querySelector('.health span');
let p = document.querySelector('.health p');


let spanArr = ['흡연이 건강에 미치는 영향과 금연방법', '과식, 어떻게 피할까?'];
let pArr = ['매번 금연을 선언하지만 성공했다는 사람은 찾아보기 힘들다. 금연이 의지력에 달린 문제라 생각하기 쉽지만 전 인내하는 것만으로는 금연에 성공하기 어렵다고 한다. 건강에 대한 우려 때문에 많은 흡연자들이 금연을 시도하고 있지만, 자신의 의지로 담배를 끊을 확률은 1년에 3~5% 에 불과할 정도로 낮다. 또한 2018년 시행된 연구에 따르면 국내에서...','많은 사람들은 습관처럼 과식을 한다. 식사 시 폭식을 하는 경우, 하루에 여러 번 간식을 먹는 경우, 식당에서 욕심을 부려 너무 많은 음식을 먹는 경우, 파티에서 흥청망청 먹는 경우, 운전 중이나 책상에서 의식하지 않고 식사하는 경우 등 칼로리 과다 섭취의 위험에 빠지곤 한다. 영양 전문가이자 행동변화 전문가인 브라이언 완씽크 교수는 건강에 해로운...']


let count = 0;
let timeId = null

timeId = setInterval( make, 3000)

function make() {
    count++;
    if(count > 1) {
        count = 0
    }
    change();
}

function change() {
    span.textContent = spanArr[count];
    p.textContent = pArr[count];
    img.setAttribute('src', `./images/health-img${count}.png`);
}

btn[0].addEventListener('click', () => {
    count--;
    if(count<0) { count = 1}
    change();
})
btn[1].addEventListener('click', () => {
    count++;
    if(count>1) { count = 0}
    change();
})