
const fx = require("./../lib/fx.js");

const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
]


const add = (a,b) => a+b;
console.log(
    fx.reduce(
        add,
        fx.map(p => p.price,
            fx.filter( p => p.price <20000,products))
    )
);


console.log(
    fx.reduce(
        add,
        fx.filter(n => n >= 20000,
            fx.map( p => p.price,products))
    )
);

// console.log(fx.reduce(add,[10,20,30,40,50]))

console.log(fx.reduce((acc,a)=> { return acc.push(a);},[],[1,2,3,4,5]))
console.log(fx.reduce((acc,a)=> { return acc.test = a;},{},[1,2,3,4,5]))