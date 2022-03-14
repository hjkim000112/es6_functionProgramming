
const fx = require("./../lib/fx.js");
const { filter, map } = require("../lib/fx.js");

//go
//왼쪽에서부터 오른쪽으로 평가하면서 연속적으로 
//함수를 실행하고 이전에 실행된 함수의 결과를 다음 함수에 전달하는 함수

const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
] 

const go = (...args) =>{
    fx.reduce((acc,a)=> a(acc),args); 
};

go(
    //초기값.
    products,
    //acc => filter로 거를값을 제외하고 다시 acc에 담는다.
    products => fx.filter(p => p.price <20000, products),
    //acc => reduce함수에 위에 나왔던결과가 acc에 저장되어있는상태.
    // go의 f => 이 배열안에있는 함수들을 하나씩 빼가기 때문에.
    products => fx.map(p =>p.price,products),
    prices => fx.reduce(fx.add,prices),
    console.log
)