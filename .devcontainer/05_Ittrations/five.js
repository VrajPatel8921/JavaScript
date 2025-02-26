let Coding=["JavaScript","rb","python","java","C++"];

Coding.forEach((item)=>{
    // console.log(item);
    
})

//fir Each USing Function Method
const printMe=(item)=>{
    console.log(item);
}

// Coding.forEach(printMe);

//ForEach Loop Contains item,indexes And Full Array As PeraMeters
Coding.forEach((item,indexes,val)=>{
    // console.log(indexes,item,val);
})

let myCoding=[
    {
        id:1,
        name:"Vraj"
    },
    {
        id:2,
        name:"Om"
    },
    {
        id:3,
        name:"Urvish"
    },
    {
        id:4,
        name:"Harry"
    },
]
//Real World Problem On API Call 

myCoding.forEach((item)=>{
    console.log(`${item.id}:${item.name}`);
})   


