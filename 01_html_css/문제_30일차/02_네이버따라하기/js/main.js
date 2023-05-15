let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let bgC = document.querySelector('div main'); 
let txtNum = document.querySelector('div p span');
let txtAni = document.querySelector('div main p');

let color = ['yellow', 'pink', 'skyblue', 'lime', 'hotpink'];
let animal = ['고양이', '호랑이', '사슴', '강아지', '고래고래'];
let timeId = null , interval = 3000;
let count = 0;

txtNum.textContent = `${count+1}/5`

timeId = setInterval(roll, interval);

function roll() {
    count++;
    if(count>4) {count=0}
    banner()
}

function banner() {
    bgC.style.background = color[count];
    txtNum.textContent = `${count+1}/5`
    txtAni.textContent = animal[count];
}

prev.addEventListener('click', () => {
    count--;
    if(count<0) {count=4}
    banner();
    clearInterval(timeId)
    timeId = setInterval(roll, interval);
})

next.addEventListener('click', () => {
    count++;
    if(count>4) {count=0}
    banner();
    clearInterval(timeId)
    timeId = setInterval(roll, interval);
})