'use strict'

// let str = 'abcdJAVAscript efghJAVA';
// let str1 = 'java'
// let str2 = 'script'
// let str_s = 'JAVA';

// for(let i =0; i<str.length; i++) {
//     console.log(str.charAt(i));
// }

// for( let x in str) {
//     console.log(x);
// }

// for(let x of str) {
//     console.log(x);
// }

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str1.concat('', str2));
// console.log(str.trim());
// console.log(str);

// console.log(str.indexOf(str_s));
// console.log(str_s, str.indexOf(str_s)+1 );

// console.log(str.includes('asdsad') ? 'searched' : 'cant searched');
// console.log(str.split(' ')[0])

let str ="Good morning afternoon evening DOG CAT Naver dog Cat Goole Nate naver MORNING";

let txt = "doG";
let result1 = '';
let result2 = '';


if(str.indexOf(txt.toUpperCase()) != -1 && str.indexOf(txt.toLowerCase())) {
    console.log('dog 검색')
} else {
    console.log('dog 검색 못함')
}

// result1 = str.indexOf(txt.toUpperCase()); 31
// result1 = str.indexOf(txt.toLowerCase()); 45
// result1 = str.substring(31, 34) + str.substring(45, 48);
// console.log(result1);

// result2 = str.includes(txt.toUpperCase()) ? 'dog 검색' : "dog검색 못함";
// result2 = str.includes(txt.toLowerCase()) ? 'dog 검색' : "dog검색 못함";

// console.log(result2);