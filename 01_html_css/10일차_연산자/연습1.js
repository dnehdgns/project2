'use strict'

let num = Number(prompt('동전갯수 입력 : ', ''));

let result = null;

result = (num%2) ? '동전은 짝수개' : '동전은 홀수개';

console.log(result);