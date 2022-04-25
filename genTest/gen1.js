function* gen(iter){
    for(const i of iter){
        yield i;
    }
}

let iter = gen([1,2,5]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
