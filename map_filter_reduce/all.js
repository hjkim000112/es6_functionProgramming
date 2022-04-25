const {filter} = require('./filter.js');
const {map} = require('./map.js');
const {reduce} = require('./reduce.js');

const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
]
const add = (a,b) => a+b;
console.log(reduce(
    add,
    map(p => p.price,
        filter(p => p.price < 20000,products))));
