'use strict'

// let arr = [10,20,30,40];

// console.log(arr.at(-2))

// ==============================================================================

// let str = '안녕하세요'

// let arr = [];

// for(let i=str.length-1; i>=0; i--) {
//     arr.push(str.charAt(i));
// }

// console.log(arr.join('-'));

// ================================================================================

// let arr = [10,20,30,40,50];

// let sum = 0, avg = 0;

// for(let i=0; i<arr.length; i++) {
//     sum += arr[i];
//     avg = sum/arr.length;
// }

// console.log(sum, avg);

//================================================================================

// let arr = [30, 10, 50, 40, 20];

// // console.log(arr.sort( function(a,b){
// //     return b-a;
// // } ).at(-1));

// let maxNum = 0

// for(let i=0; i<arr.length; i++) {
//     if(maxNum<arr[i]) {
//         maxNum = arr[i];
//     }
// }

// console.log(maxNum);

// ================================================================================

// let arr = [10,20,30,40,50,60];

// arr.splice(3,3,35);

// console.log(arr);

// ================================================================================

// let arr = [1,2,3,4];
// let arr1 = ['김ㄱ','ㄴ','ㄷ','김ㄹ'];

// // console.log(arr1.includes('ㅋ'));
// // console.log(arr1.filter( function (item) {
// //     return item.indexOf('김') != -1;
// // }));
// console.log(arr1.filter( item => item.includes('김')));
// console.log(arr.filter(num => num>5));

// ================================================================================

// let data = [
//     {id:1, name:'ㄱ', age:11, addr:'서울'},
//     {id:2, name:'ㄴ', age:22, addr:'인천'},
//     {id:3, name:'ㄷ', age:33, addr:'대전'},
//     {id:4, name:'ㄹ', age:44, addr:'대구'},
//     {id:5, name:'ㅁ', age:55, addr:'부산'},
//     {id:6, name:'ㅂ', age:66, addr:'강릉'}
// ]

// // for(let i=0; i<data.length; i++){
// //     if(data[i].addr == '부산') {
// //         console.log(data[i]);
// //     }
// // }

// console.log(data.filter(item => item.addr.includes('부산')));

// ================================================================================

// const arr =[
//     {name:'김철수', age:20},
//     {name:'이수근', age:30},
//     {name:'김다미', age:40},
//     {name:'최우식', age:25},
//     {name:'김성철', age:22},
//     {name:'송혜교', age:10},
//     {name:'유재석', age:45},
// ]

// // console.log(arr.filter(item => item.age>20))
// console.log(arr.filter( item => item.name != '송혜교'))

// ================================================================================

// const data =[
//     {text:'naver'},
//     {text:'NAVER'},
//     {text:'nate'},
//     {text:'NATE'},
//     {text:'google'},
//     {text:'GOOGle'},
//     {text:'dog'},
//     {text:'DOG'},
//     {text:'cat'},
//     {text:'CAT'},
//     {text:'CUTE'},
//     {text:'cute'},
// ];

// let txt = 'do';

// console.log(data.filter(item => {
//     return item.text.includes(txt.toUpperCase()) || item.text.includes(txt.toLowerCase()) || item.text.includes(txt)
// }))

// ================================================================================


// let arr = [1,2,3,4,5,6];
// // let a1 = arr.filter(item => item>=3);
// // let a2 = arr.find(item => item>=3);
// let a3 = arr.findIndex(item => item>=3);

// console.log(a3);

// ================================================================================

// let data = [
//     {id:1, name:'ㄱ', age:11, addr:'서울'},
//     {id:2, name:'ㄴ', age:22, addr:'인천'},
//     {id:3, name:'ㄷ', age:33, addr:'대전'},
//     {id:4, name:'ㄹ', age:44, addr:'대구'},
//     {id:5, name:'ㅁ', age:55, addr:'부산'},
//     {id:6, name:'ㅂ', age:66, addr:'강릉'}
// ]

// let data1 = data.filter(item => item.id==3)
// console.log(data1);
// let data2 = data.find(item => item.id==3)
// console.log(data2);
// let data3 = data.findIndex(item => item.id==3)
// console.log(data3);

// ================================================================================

// let arr = [10,20,30,40,50];
// let arr1 = arr.map(item => {
//     return (item%3 == 0) ? item+100 : item;
// });

// console.log(arr1)

// ================================================================================

// const arr =[
//     {name:'김철수', age:20},
//     {name:'이수근', age:30},
//     {name:'김다미', age:40},
//     {name:'최우식', age:25},
//     {name:'김성철', age:22},
//     {name:'송혜교', age:10},
//     {name:'유재석', age:45},
// ]

// let arr1 = arr.map(item => {
//     return (item.age % 3 == 0) ? '3의 배수' : item.age;
// })

// console.log(arr1)

// ================================================================================


// let arr = [10,20,30,40,50];

// // arr.forEach(item => {
// //     if(item % 3 == 0){
// //         console.log(item)
// //     }
// // });

// arr.forEach(item, index => {
//     if(index == 5){
//         console.log('중단');
//     }
// })

// ================================================================================

// let colors = ['노랑','파랑','빨강','분홍'];
// let color_map = '';
// let color_each = [];
// // map문  - 결과1
// // color_map= colors.map(item => item+'색');
// // console.log(color_map);
// //forEach문  - 결과2
// colors.forEach(item => color_each.push(item+'색'));
// console.log(color_each);
//결과 : [노랑색 ,파랑색 ,빨강색, 분홍색]

// ================================================================================

// let arr = [10,20,30];
// let sum = 0;

// // for(let item of arr) {
// //     sum += item;
// // }
// // console.log(sum);

// // for(let i in arr) {
// //     sum += arr[i];
// // }
// // console.log(sum);
// // for(let i=0; i<arr.length; i++) {
// //     sum += arr[i];
// // }
// // console.log(sum);

// // arr.forEach(item => sum+=item)

// // console.log(sum);

// arr.reduce((acc, cur) => sum = acc+cur)
// console.log(sum);

// ================================================================================

// let sum = 0
// let avg_sum = 0;
// let name='';

// let data = [
//     {id:1, name:'ㄱ', age:11, addr:'서울'},
//     {id:2, name:'ㄴ', age:22, addr:'인천'},
//     {id:3, name:'ㄷ', age:33, addr:'대전'},
//     {id:4, name:'ㄹ', age:44, addr:'대구'},
//     {id:5, name:'ㅁ', age:55, addr:'부산'},
//     {id:6, name:'ㅂ', age:66, addr:'강릉'}
// ]

// // sum = data.reduce((acc,cur) => {
// //     return acc+cur.age
// // },0)
// // avg_sum = (sum/data.length).toFixed(2);
// // console.log(sum, avg_sum);

// for(let item of data) {
//     name += item.name;
// }

// console.log(name);

let arr = [10,20,30,40];

let arr1 = arr.every(item => item<50);
console.log(arr1);