
// function* odds(l){

//     for(let i=0; i < l; i++){
//         if(i%2) yield i; 
//     }

// }


function* infinity(i = 0){
    while(true) yield i++;
}

function* limit(l,iter){
    for(const a of iter){  
        yield a;
        if(a == l) return; //l == a가 들어온 인자 값에 도달하면 함수를 종료한다.
    }
}

// function* odds(l){
//     for(const a of infinity(1)){ //infinity가 next 값이 있으니까 infinity. 1부터 
//         //infinity는 1씩계속 증가하는 이터레이터를 가진 이터러블이다.
//         //infinity함수는 반환조건이 따로 걸려있지 않아서 무한반복한다. 
//         //하지만 next가 호출될때만 진행되기때문에 이렇게 사용할 수도 있다.
//         if(a % 2) yield a; //ex> a=3 이라면 a%2 는 1이기때문에 이런식으로 홀수만 값이 들어간다. 
//         if(a ==l)return; //l == a가 들어온 인자 값에 도달하면 함수를 종료한다.
//     }

// }


//최종 
function* odds(l){
        for(const a of infinity(1)){  
            
            if(a % 2) yield a; 
            if(a ==l)return; 
        }
    
    }
    

let iter2 = odds(10); 
let iter3= infinity();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

for(const a of odds(40)){
    console.log(a);
}


console.log([...odds(10)])
const arr = ['1',2,3,4,6]
console.log([...arr]);

const [head, ...tail] = odds(5);
console.log(head); //1
console.log(tail); //3,5
