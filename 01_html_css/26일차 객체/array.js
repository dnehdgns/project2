'use strict'


/* 
    array : 비슷한 성격의 나열
            동일한 성격의 나열
            모든값 다 들어간다
            숫자, 문자, 함수, 배열, 객체
 */



    // let a = 10;
    // let b = 20;
    // let c = 30;
    // let d = 40;
    // let e = 50;

    // let addNum = 10;

    // let arr = new Array();
    // for(let num = 0; num<5; num++){
    //     arr[num] = addNum;
    //     addNum += 10;
    // }

    // for(let i = 0; i<arr.length; i++) {
    //     console.log(arr[i]);
    // }

    // for(let i in arr) {
    //     console.log(`${i} : ${arr[i]}`)
    // }

    // for( let item of arr) {s
    //     console.log(item)
    // }

    // console.log(Array.isArray(arr));
    // console.log(Array.isArray('고양이'));


    // 배열객체 - [{키:값, 키:값, 키:값 ....},{},{}] - react

    // let data = [
    //     {id:1, name:'가', age:1},
    //     {id:2, name:'나', age:10},
    //     {id:3, name:'다', age:30}
    // ]

    // // console.log(data[0].id);


    // for(let item of data) {
    //     console.log(item.id)
    // }

    let arr = [
        {id:1, name:'사과', num:10, m:0.2},
        {id:2, name:'배', num:20, m:0.3},
        {id:3, name:'수박', num:30, m:0.4},
        {id:4, name:'참외', num:50, m:0.5}
    ]

    function make(data) {
        let total = 0;
        for(let item of data){
            total += item.num*item.num*item.m;
        }
        return total;
    }

    let z = make(arr);

    console.log(z);

