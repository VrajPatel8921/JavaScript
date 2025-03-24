let descripter=Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descripter);

let chai={
    name:"Ginger Tea",
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (const [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`);
}