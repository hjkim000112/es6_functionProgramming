const {filter} = require('../map_filter_reduce/filter');
const {map} = require('../map_filter_reduce/map.js');
const {reduce} = require('../map_filter_reduce/reduce.js');

// 
const go = (...args)=>{
    reduce(
        (acc, a)=> a(acc) // reduce 에서 f
        // reduce에서 f(acc,a)
        // a는 현재 for 문에서의 객체 1개를 가르킴 (곧 현재 반복하고 있는 무언가를 의미함)
        // 지금 반복하고 있는것은 함수들의 모음이기 때문에 
        // a()를 실행한다 인자는 acc로 .
        //
        ,
         args //reduce에서 acc(0)과 iter(함수 리스트들)
         );
};

go(
    0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
    console.log
 // 111
)