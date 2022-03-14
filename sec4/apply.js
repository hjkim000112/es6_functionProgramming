
 /*
***일급 함수
 - 함수가 값으로 다뤄질 수 있따.

***고차 함수
 - 함수를 값으로 다루는 함수

***함수를 인자로 받아서 실행하는 함수
 - apply1
 - times

 */

 const apply1 = f => f(1);
 const add2 = a => a+2;
 console.log(apply1(add2)); //apply1은 
 console.log(add2('test'));


const times = (f,n)=>{ //함수와, 숫자를 받아서 숫자만큼 함수를 실행하는 함수. (어플리케이티브 프로그래밍 이라고도 함.)
    let i = -1;
    while( ++i < n) f(i);
}
times(a=>console.log(a+10),3);


// 함수를 만들어서 리턴하는 함수(클로저를 만들어 리턴하는 함수)
// - addMaker

const addMaker = a => b => a+b;
const add10 = addMaker(10);
console.group(add10(5));
