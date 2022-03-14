
//제너레이터/이터레이터
 // - 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

function* gen(){
    yield 1;
    // yield 2;//일드
    if(false)yield 2;//일드
    yield 3;
    return 100; //마지막 done:true 일때 value 값으로 들어가는 값.
}

let iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
