const products = [
    {name: '반팔티',price:15000},
    {name: '긴팔티',price:20000},
    {name: '핸드폰케이스',price:15000},
    {name: '후드티',price:30000},
    {name: '바지',price:25000},
]







const map = (f,iter)=>{
    let res = [];
    for(const a of iter){
        res.push(f(a));
    }
    return res;
}


[1,2,3].map(a => a+1);//array의 map을 통해서 값을 만들어내지만 

// console.log(document.querySelector('*').map(el => el.nodeName)); 
//여기서는 array를 상속받지 않았기때문에 map함수가 없다.
//하지만 원래 동작하지 않았던 코드도 이터러블 프로토콜을 따르고 있는 값이라면
//모두 map 을 사용할 수 있다.

// console.log(map(a=> a.name ,products));
// console.log(map(a=> a.price ,products));
function* gen(){
    yield 2;
    if(false) yield 3;
    yield 4;
}

let m = new Map();
m.set('a',10);
m.set('b',10);
console.log(new Map(map(([k,a])=> [k,a *2],m)));
console.log(map(([k,a])=> [k,a *2],m));


