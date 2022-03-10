function *gen(){
    yield 1;
    yield 2;
    yield 3;
}

let iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());