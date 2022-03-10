const iterable = {
    [Symbol.iterator](){ //a함수
            let i = 3;
        // console.log("test");
        return{
            next(){
                return i == -2?{done:true}:{ value:i--,done:false }
            },
            [Symbol.iterator](){ //b함수 => a함수에있는 i 값을 가지고 b 함수만 리턴
                //그럼 for of 문에서는 이터레이터가 존재해야 작동하니까 이 리턴된 객체만 계속 가지고 있으면됨.
                console.log(this);
                console.log(i);
                return this;
            },
            // test(){
            //     console.log("test123");
            // }
            
        }
    }
};
let iterator = iterable[Symbol.iterator]();
// console.log(iterator);
console.log(iterator[Symbol.iterator]());
iterator[Symbol.iterator]().next();
iterator[Symbol.iterator]().next();
iterator[Symbol.iterator]().next();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// for(const a of iterator) console.log(a);
// console.log(iterator.next());
// console.log(iterator.next());
// 


//잘 구현된 

