//함수를 값으로 다루면서 받아둔 함수를 원하는시점에 실행(평가)시키는것 

const {filter} = require('../map_filter_reduce/filter.js');
const {map} = require('../map_filter_reduce/map.js');
const {reduce} = require('../map_filter_reduce/reduce.js');
const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
]

const go = (...args)=>
    reduce(
        (acc, a)=> a(acc) // reduce 에서 f
        ,
         args 
         );

const pipe = (...fs) => {
   return  (a) => {
    // console.log(a);
    return go(a, ...fs)
   }
};



const f = pipe(
    a => a + 1,
    a => a + 10,
    a => a + 100
)

// console.log(f(0));

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
            //add => () => 
const add = (acc,a) => acc + a;

const add1 = curry(add);
const add2 = add1(2,2);
console.log(add2);
// console.log(add2(1));
// console.log(add2(5));
go(
    products,
    products => filter(p => p.price < 20000)(products),
    products => map(p => p.price)(products),
    prices => reduce(add)(prices),
    console.log
);

console.log(filter(p => p.price < 2000));

const test = curry((a,b) => a+b);
go(
    3,
    test('테스트'),
    console.log
);


// exports.curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);


const mult = curry((a,b)=> a*b);
console.log(mult(2)(3));

const mult3 = mult(3);
console.log(mult3(10)); 
console.log(mult3(5));
console.log(mult3(3));
