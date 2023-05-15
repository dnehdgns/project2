'use strict';


function make(name,age,addr) {
    // 삼항연산자 이용
    // 주소가없으면 주소없음 출력
    addr = addr ? addr : '주소없음';
    console.log(`이름은: ${name}이고 나이는 ${age}살이고 주소는 ${addr}입니다`);
}

make('홍길동',1,'서울');
make('김삿갓',2);

function make1(name='모름',age='모름',addr='모름') {

    console.log(`이름: ${name}, 나이: ${age}, 주소: ${addr}`);
}

make1();
make1('고양이');
make1('강아지', 2);
make1('거북이', 10, '어항');

const make2 = (x) => {
    return x*x;
}

let result = make2(2);
console.log(result);