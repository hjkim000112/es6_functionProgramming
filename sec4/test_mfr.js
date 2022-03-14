const map = (iter,f)=>{ // 받은 값을 순회해서 새로운 배열을 만들어내는 map 함수
    let res = [];
    for(const a of iter){
        res.push(f(a));
    }
    return res;

}

console.log(map([1,2,3,4,5],item => item+3));


const filter = (iter,f)=>{ //iter에서 조건에 맞는 값만 새로운 배열에 담아서 return 하는 filter함수
    let res = [];
    for(const a of iter){
        if(f(a)){
            res.push(a);
        }
    }
    return res;
}

console.log(filter([3000,2000,1000,5000],a => a >1500))


const reduce = (f,acc,iter)=>{ // 값들을 합쳐서 리턴해줌.
     if(!iter){
         iter = acc[Symbol.iterator]();
         acc = iter.next().value;
     }
     for(const a of iter){
        acc = f(acc,a);
     }

     return acc;
}
console.log(
    reduce(
       (acc,a) => acc + a,
       
       [1,2,3,4,5]
    )
    )