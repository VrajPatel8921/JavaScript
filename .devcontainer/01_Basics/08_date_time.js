//Dates

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreatedDate=new Date(2005,11,2);
console.log(myCreatedDate.toDateString());



let myTimeStemp=Date.now();
console.log(myTimeStemp);
console.log(myCreatedDate.getTime());

let day=myDate.getDate();
let Month=myDate.getMonth();
let year=myDate.getFullYear();

console.log(`${day}/${Month}/${year}`);


