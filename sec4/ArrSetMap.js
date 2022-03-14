const arr = [1,2,3];
// arr[Symbol.iterator] = null;
// for(const a of arr) console.log(a);
// console.log(arr[Symbol.iterator]) //심볼은 어떤 객체의 키로 사용될 수 있다.

let iter1 = arr[Symbol.iterator]();
iter1.next();
for(const a of iter1)console.log(a);

const set = new Set([1,2,3]);
// for(const a of set) console.log(a);
// console.log(set[Symbol.iterator])


console.log('Map---------------')
const map = new Map([['a',1],['b',2],['c',3]]);
// for(const a of map) console.log(a);
// console.log(map[Symbol.iterator])
// console.log(map.keys()); //맵에서는 keys 를 했을때 Iterator를 리턴합니다.(key만 뽑는것이가능 , value도 가능,ectries도 가능.)

let iter = arr[Symbol.iterator]();

let it = map.values();
console.log(it);
console.log(it[Symbol.iterator]());
console.log(it.next());


// - 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
// - 이터레이터 : { value, done } 객체를 리턴하는 next()메서드를 가진 값
// - 이터러블 / 이터레이터 프로토콜 : 이터러블을 for...of , 전개 연산자 등과 함께 동작하도록한 규약

// => arr,set,map은 이터러블 