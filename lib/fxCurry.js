
const curry = f => (a, ..._)=>_.length ? f(a, ..._) : (..._)=>f(a, ..._);



exports.map = curry((f,iter)=>{
    let res = [];
    for(const a of iter){
        res.push(f(a));
    }
    return res;
});

exports.filter = curry((f,iter)=>{
    let res = [];
    for(const a of iter){
        if(f(a)) res.push(a);
    }
    return res;
})

exports.reduce = curry((f,acc,iter)=>{ //ac cu mu late 어 큐 뮤 레이트
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter ){
        if(typeof(acc) === 'object'){
            f(acc ,a);
        }else{
            acc = f(acc ,a);
        }
    }
    return acc;
});

exports.add = (a,b) => a+b;

