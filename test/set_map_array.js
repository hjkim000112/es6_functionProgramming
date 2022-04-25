console.log("Arr ---------------");
const arr = [1,2,3];
const  test = arr.keys();
console.log(test[Symbol.iterator]);

const obj = {1:'1',
             2: '2'};
const  test2 = obj;
console.log(Object.keys(test2));
for(i in obj){
    console.log(i);
}
// console.log(test2);