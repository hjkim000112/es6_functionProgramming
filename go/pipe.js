const {filter} = require('../map_filter_reduce/filter');
const {map} = require('../map_filter_reduce/map.js');
const {reduce} = require('../map_filter_reduce/reduce.js');


const go = (...args)=>
    reduce(
        (acc, a)=> a(acc) // reduce 에서 f
        ,
         args 
         );

const pipe = (...fs) => {
   return  (a) => {
    console.log(a);
    // return go(a, ...fs)
   }
};
// go(
//     0,
//     a => a + 1,
//     a => a + 10,
//     a => a + 100,
//     console.log
//  // 111
// )


const f = pipe(
    a => a + 1,
    a => a + 10,
    a => a + 100
)

console.log(f(0));



