'use strict'


// let arr = [11,33,26,38,41];

// arr.sort((a,b) =>  b-a)

// // console.log(arr);


// let arr2 = [12,56,34,78];

// arr2.sort().reverse();

// console.log(arr2);

// const obj =[
//     {name:'김철수', age:20},
//     {name:'이수근', age:30},
//     {name:'김다미', age:40},
//     {name:'최우식', age:25},
//     {name:'김성철', age:22},
//     {name:'송혜교', age:10},
//     {name:'유재석', age:45},
// ]

// obj.sort(function(a,b){

//     if(a.age>b.age){
//         return 1;
//     } else if(a.age<b.age) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// for(let item of obj){
//     console.log(item.age)
// }

// let result= 0;

const arr =[
    {name:'김철수', age:20},
    {name:'이수근', age:30},
    {name:'김다미', age:40},
    {name:'최우식', age:25},
    {name:'김성철', age:22},
    {name:'송혜교', age:10},
    {name:'유재석', age:45},
]



let arr_age = arr.filter(item =>{
    if(item.age >=30) {
        return true;
    }else {
        return false;
    }
});

console.log(arr_age);


// let arr = [10,20,30,40,50,60]
// let arr1 = arr.filter ((item) =>item % 3 == 0)

// console.log(arr1);