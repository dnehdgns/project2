'use strict'


/* 
    String : 문자열 내장 객체, 첫글자는 반드시 대문자로 시작
    typeof : string
    String.메서드()
    String.속성

    방법1
    let 변수 = new String('문자열'); : object
    let 사용자정의객체 = new String('문자열');

    방법2
    let 변수 = '문자열' : String
    변수.속성
    변수.메서드() : 객체의 성격으로 사용가능
 */

const str1 = new String('안녕하세요');
console.log(typeof str1);
console.log(str1.length);

const str2 = '지금은 3교시';
console.log(typeof str2);
console.log(str2.length);