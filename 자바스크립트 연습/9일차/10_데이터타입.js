'use strict'; //엄격모드

let name = '김고은'
let age = 20;
let isPlay = true;
let end = null;
let data = undefined;
let arr = [10,20,30];
let obj = {a:10, b:20, c:30};
let json = {"name":"송혜교","age":20, "addr": "서울"};

//null은 선언할떄 undefined 해당변수에 값이 존재하지 않을때 : 둘다 개념은 동일하나 사용방법이 다르다.

//null은 object가 아니다 (결과가 잘못)

console.log('name :' , name , typeof name);
console.log('name :' , age , typeof age);
