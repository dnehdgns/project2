'use strict'


/* 
    객체란 : 각종사물 - 보고, 만지고 느낄수 있는 모든사물
    속성(키) : 고유값
    메서드 : 모든행동()

    속성 + 메서드 : 멤버

    객체 : 강아지
    강아지.키 = 종, 털색, 나이, 성별
    강아지.메서드() = 뛰기, 걷기, 구르기, 꼬리흔들기 ...

    객체 : 현실세계의 객체를 컴퓨터 언어로 변경한것
    키(속성) : 객체의 고유한 기능 특징
    메서드 : 객체가동작

    형식)
    let 객체명 = {
        키 : 값 ( 숫자, 문자, 배열, 객체등등);
    }
 */
let colors = {
    red : 'red',
    green : 'green',
    pink : 'pink'
};

let blue1 = 'blue3';
colors['blue'] = blue1;
// 객체명 = 변수규칙과 동일하다
console.log(`colors객체명 안에 red키 값 : ${colors.red}`)
console.log(`colors객체명 안에 blue키 값 : ${colors.blue}`)