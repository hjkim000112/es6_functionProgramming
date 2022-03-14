//함수들이 나열되어있는 합성된 함수를 만드는 함수



const fx = require("./../lib/fx.js");

const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
]

const go = (...args) => {
    fx.reduce((a,f)=> f(a),args); //0 , f(a=0) => a+1
                                  //1 , f(a=1) => a+10
                                  //1 , f(a=11) => a+100
};
const pipe = (f,...fs) => (...as) => {go(f(...as),...fs)};

// go(
//     0,
//     a => a+1,
//     a => a+10,
//     a => a+100,
//     console.log
// )

const f = pipe(
    a => a+1,
    a => a+10,
    a => a+100,
    console.log
)
f(5);