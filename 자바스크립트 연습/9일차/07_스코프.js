let num = 100;
console.log(num); {
    let num =200;
    console.log(num); {
        let num = 300;
        console.log(num); {
            let num = 400
            console.log(num);
        }
        console.log(num);
    }
    console.log(num);
}
console.log(num);

/* 
    스코프: 유효범위(참조범위)
    블록레벨스코프: {} - 함수레벨스코프
    블록레벨스코프 fucntion 함수명(){}
    전역스코프 : {} 밖에 선언
    지역스코프 : 해당 {} 안에서만 사용가능
*/