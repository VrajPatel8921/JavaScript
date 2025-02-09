let arr=[1,2,3,4,5];
let heroes=["Ironman","Thor","Captain America"];
console.log(arr[0]);
// arr.push(6);
// arr.pop();
console.log(arr);

arr.unshift(8);
console.log(arr);

console.log(arr.includes(8));
console.log(arr.indexOf(19));
console.log(arr.indexOf(1));

let newArr=arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

let myn1=arr.slice(1,3);
console.log(myn1);

let myn2=arr.splice(0,3);
console.log(myn2);
console.log(arr);

