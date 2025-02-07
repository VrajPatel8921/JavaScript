let Score=400;
console.log(Score);

let balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

let otheNumber=1000000000;
console.log(otheNumber.toLocaleString('en-IN'));

//++++++++++++++Math++++++++++++++//
console.log(Math.abs(-10));
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.floor(4.9));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));