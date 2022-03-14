//curry
//함수를 값으로 다루면서 
//받아둔함수를 내가 원하는 시점에 평가
//함수를 받아서 함수를 리턴하고 
//인자를 받아서 인자가 원하는 
//개수만큼의 인자가 들어왓을때 나중에 평가 시키는 함수

// 함수를 받아서  함수를 리턴, 리턴된 함수에서는 첫번째 함수에서 사용할 인자를 대신해서 받는다.
// 함수의 인자가 2개 이상 들어왔을때 ,곧 a, ..._에서 (..._)의 length 값이 존재할때
//받아둔 함수를 즉시 실행하고.
//아니라면 다시한번 함수를 리턴합니다.

//1.함수(f)를 받아서 (a,..._) => f =>(a, ..._)=>_.length ? f(a, ..._) : (..._)=>f(a, ..._);
//를 리턴
//리턴된 함수가 실행되었을 때 인자가 2개 이상이라면, 받아둔 함수(f)를 즉시 실행하고 
// 인자가 하나라면 함수를 다시 리턴한 후에 

const curry = (f) =>{ //처음 f 함수를 하나 받는다. (f함수 가지고 있는상태.)
    //curry 
    return (a, ..._)=>_.length ? f(a, ..._) : (..._)=>f(a, ..._);}

const mult = curry((a,b)=>a*b);
console.log(mult(1)(2));

const mult3 = mult(3);
console.log(mult3(10));




//이밑으로는 응ㅇ용--------------------



const fx = require("./../lib/fxCurry.js");

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
    fx.reduce((acc,f)=> f(acc),args);  //f(acc)때 두번째 실행?
    //reduce에 args , 객체, 함수,함수,함수,함수 순으로 넣음
    //인자가 2개이기때문에 자동으로 처음에 넣은 값이 초기값이 됨.
    //acc가 = 객체 인상태에서 
    //(acc,a) => a(acc)함수가 실행됨. a(acc)함수는 args의 함수들중 순서대로 하나씩 실행되는것을 가리킴
    //acc에는 객체가 들어있고 
    //filter(acc => acc.price < 20000) 이된다.
};

go(
    products, //초기값. 
    fx.filter(p => {console.log('tests'); return p.price <20000}), //이때 첫번째 실행? 실행하고 인자로 넘겨지는건가.
    fx.map(p =>p.price),
    fx.reduce(fx.add),
    console.log
)


// console.log(products,fx.filter(p=>p))
// go(
//     products, //초기값. 
//     products => fx.filter(p => p.price <20000)(products),
//     products => fx.map(p =>p.price)(products),
//     price => fx.reduce(fx.add)(price),
//     console.log
// )