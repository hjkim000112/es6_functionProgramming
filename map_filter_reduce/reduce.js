
const {curry} = require('../go/curry.js');

const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
]

let total = 0;
const nums = [1,2,3,4,5];
for(const n of nums){
    total = total +n;
}
// console.log(total);

exports.reduce = curry((f,acc,iter) =>{
    let count = 0;
    if(!iter){
        console.log("iter 존재하지 않음");
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
        console.log(count);
    }
    for(const a of iter){
        acc = f(acc,a);
        ++count;

    }
   return acc;
});

const add = (acc,a) => acc + a;

// console.log(reduce(add,[1,2,3,4,5]));
// console.log(reduce(add,0,[1,2,3,4,5]));
// console.log(reduce((total_price,product) => total_price + product.price ,0,products));