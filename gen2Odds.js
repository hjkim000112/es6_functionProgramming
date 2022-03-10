// function *odds(){
//     yield 1;
//     yield 3;
//     yield 5;

// }

// let iter2 = odds();
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());

function *infi(i=0){
    while(true) yield i++;
}

function *limit(l,iter){
    for(const a of iter){
        yield a;
        if(a ==l) return;
    }
}

function *odds(l){
    for(const a of limit(l,infi(1))){
        if(a % 2) yield a;

    }

    // for(const a of infi(1)){
    //     if(a % 2) yield a;
    //     if(a == l) return;

    // }


    // for(let i = 0; i <l; i++){
    //     if(i % 2) yield i;
    // }
}

let iter3 = odds(10);
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
